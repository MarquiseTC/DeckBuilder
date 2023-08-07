import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

import Deck from "./Deck";
import React from "react";
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";
import { getDeckById } from "../Managers/DeckManager";
import { searchCards } from "../Managers/SearchManager";
import { MagicCards } from "../Cards/Cards";

export const DeckDetails = () => {
    const [deck, setDeck] = useState();
    const { id } = useParams();
    const [cards, setCards] = useState([])
    const [query, setQuery] = useState("")
    // const navigate = useNavigate();
    // const localDBUser = localStorage.getItem("userProfile")
    // dbUserObject = JSON.parse(localDBUser)

useEffect(() => {
    getDeckById(id).then(setDeck);
}, [])

if (!deck) {
    return null;
}

const searchAllCards = (e) => {
  e.preventDefault()
  searchCards(query).then(card => 
   {  console.log(card) 
      setCards(card)}
      )
};


return ( <>
    <Card sx={{ maxWidth: 345 }} onChange={e => setQuery(e.target.value)}  >
      
      <CardContent >
      
        <Typography gutterBottom variant="h5" component="div">
        <TextField id="outlined-basic"  label="Search"  variant="outlined" 
            />
                   
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
           Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>

      </CardContent>
      <CardActions>
      <Button variant="outlined" color="secondary"  type="sumbit" onClick={searchAllCards} >Search</Button>
            <Button variant="outlined" color="secondary" type="submit">Save Deck</Button> 
      </CardActions>
   </Card>  
    
    <Grid container spacing={4}>
  {cards.map((card) => {
              
              return  <MagicCards key={card.id} card={card} />
              
            })} 
           </Grid>  </>
  );


}