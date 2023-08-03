import { Stack, TextField,Button,} from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import React from "react"
import { register } from "../Managers/UserManager"

export const Register = ({setIsLoggedIn}) => {
const navigate = useNavigate()
const [user, setUser] = useState({
    name: "",
    email: "",
})

const registerClick = (e) => {
    e.preventDefault();
    {
        register(user)
        .then(() => {
            setIsLoggedIn(true)
            navigate('/')
        })
    }
}


return (
    <React.Fragment>
        <h2>Registration Form</h2>
        <form onSubmit={registerClick} action={<Link to="/login" />}>
            <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
            <TextField 
                type="text"
                variant='outlined'
                color='secondary'
                label="Name"
                onChange={(event) => {
                    const copy = {...user}
                    copy.name = event.target.value
                    setUser(copy)
                }}
                value={user.name}
                fullWidth
                required
                />
                <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Email"
                onChange={(event) => {
                    const copy = {...user}
                    copy.email = event.target.value
                    setUser(copy)
                }}
                value={user.email}
                fullWidth
                required
                />
            </Stack>
            <Button variant="outlined" color="secondary" type="submit">Complete</Button>
        <small>Already signed up? <Link to="/login">Return to login</Link></small>
        </form>
    </React.Fragment>
)
}