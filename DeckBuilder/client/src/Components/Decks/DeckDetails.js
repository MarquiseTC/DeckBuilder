import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";


import React from "react";
import { Button, Card, CardActions, CardContent, Grid, ListItem, TextField, Typography } from "@mui/material";
import { getDeckById, getUserDeckById } from "../Managers/DeckManager";
import { searchCards } from "../Managers/SearchManager";
import { MagicCards } from "../Cards/Cards";
import { Deck } from "./Deck";

export const DeckDetails = () => {
    const [deck, setDeck] = useState();
    const { id } = useParams();
    const [cards, setCards] = useState()
    const [query, setQuery] = useState("")
    

useEffect(() => {
    getDeckById(id).then(setDeck)
 

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
    <Card sx={{ maxWidth: 345 }}   onChange={e => setQuery(e.target.value)}>
      
      
      
        
                   
        {/* <Deck deck={deck}/> */}
        {/* <Typography variant="body2" color="text.secondary">
         </Typography><CardActions> */}
        
          
       <Typography gutterBottom variant="h5" component="div">
        <TextField id="outlined-basic"  label="Search"  variant="outlined" 
            /> </Typography>

      
      
      <Button variant="outlined" color="secondary"  type="sumbit" onClick={searchAllCards} >Search</Button>
            <Button variant="outlined" color="secondary" type="submit">Save Deck</Button> 
      {/* </CardActions> */}
   
    </Card>  
    {/* <Grid container spacing={4}>
  {cards.map((card) => {
              
              return  <MagicCards key={card.id} card={card} />
              
            })} 
           </Grid>     */}
</>   );


}