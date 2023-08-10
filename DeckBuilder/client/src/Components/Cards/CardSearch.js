import { useState } from "react"
import { searchCards } from "../Managers/SearchManager";
import { Button, Card, Container } from "reactstrap";
import TextField from "@mui/material/TextField";
import { MagicCards } from "./Cards";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";


export const CardSearch = () => {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  

  
  const searchAllCards = (e) => {
    e.preventDefault()
    searchCards(query).then(card => {
      console.log(card)
      setCards(card)
    }
    )
  };

  

  return (
    <>

      <Container
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"

        onChange={e => setQuery(e.target.value)}

          fixed
      >
        <TextField id="outlined-basic" label="Search" variant="outlined"
        />

        <Button variant="outlined" color="secondary" type="sumbit" onClick={searchAllCards} >Search</Button>
        <Button color="inherit" type="submit" onClick={() => navigate("/advanced")}>Advanced Search</Button>
        

      </Container>
      <Grid container spacing={3}>
        {cards.map((card) => {

          return <MagicCards key={card.id} card={card} />

        })}
      </Grid>  </>







  )
}

