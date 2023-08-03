import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getDeckById } from "../Managers/DeckManager";
import Deck from "./Deck";
import React from "react";

export const DeckDetails = () => {
    const [deck, setDeck] = useState();
    const {id} = useParams();
    // const navigate = useNavigate();
    // const localDBUser = localStorage.getItem("userProfile")
    // dbUserObject = JSON.parse(localDBUser)

useEffect(() => {
    getDeckById(id).then(setDeck);
}, [])

if (!deck) {
    return null;
}

return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
          {deck.Name} Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );


}