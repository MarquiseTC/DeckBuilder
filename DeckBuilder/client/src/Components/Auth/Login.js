import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { login } from "../Managers/UserManager";
import { Button, TextField } from "@mui/material";
import { Form, FormGroup, Input, Label } from "reactstrap";



export const Login = ({setIsLoggedIn}) => {
  

  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();
    login({email})
      .then(r =>{
      if(r){
      setIsLoggedIn(true)
      navigate('/')
      }
      else{
        alert("Invalid email")
      }
    })
  };

  return (
    <React.Fragment>
        <form autoComplete="off" onSubmit={loginSubmit} >
            <TextField
            label="Email"
            id="email"
            variant="outlined"
            color="secondary"
            type="text"
            sx={{mb:2}}
            fullWidth
            onChange={e => setEmail(e.target.value)}
            required
            />
            <Button variant="outlined" color="secondary" type="sumbit">Sign in</Button>
        </form>
        <small>Need to register? <Link to="/register">Register here</Link></small>
    </React.Fragment>

  );
// return (
//     <Form onSubmit={loginSubmit}>
//       <fieldset>
//         <FormGroup>
//           <Label for="email">Email</Label>
//           <Input  id="email" type="text" onChange={e => setEmail(e.target.value)} />
//         </FormGroup>
       
//         <FormGroup>
//           <Button>Login</Button>
//         </FormGroup>
//         <em>
//         Don't Have An Account Yet? <Link to="/register">Register</Link>
//         </em>
//       </fieldset>
//     </Form>
//   );

}