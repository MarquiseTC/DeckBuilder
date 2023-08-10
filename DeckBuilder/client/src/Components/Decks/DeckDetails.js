import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete'

import React from "react";
import { Button, Card, CardActions, CardContent, Container, Grid, IconButton, ListItem, TextField, Typography } from "@mui/material";
import { deleteDeck, getDeckById, getUserDeckById } from "../Managers/DeckManager";
import { searchCards } from "../Managers/SearchManager";

import { DeckMagicCards } from "./DeckMagicCards";
import { deleteCard, getCardById } from "../Managers/CardManager";

export const DeckDetails = () => {
    const [deck, setDeck] = useState();
    const { id } = useParams();
    const [cards, setCards] = useState()
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const localDBUser = localStorage.getItem("userProfile");
    const dbUserObject = JSON.parse(localDBUser)
    
    

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

const alertClick = () => {
  const confirmBox = window.confirm("Do you really want to delete this deck?")
  if (confirmBox === true){
    handleDelete()
  }
    // else (window.confirm("Post not deleted!"))
  }


  const handleDelete = () => {
    deleteDeck(deck.id).then(() => {
      navigate(`/my-decks`)
    });
  };


  const deleteButton = () => {
    if (deck.userProfileId === dbUserObject.id) {
        return <IconButton onClick={ alertClick } className="post-finish"><DeleteIcon /></IconButton>}

        else {
          return ""
        }}

        const alertClick2 = () => {
          const confirmBox = window.confirm("Do you really want to delete this card?")
          if (confirmBox === true){
            handleDelete2()
          }
            // else (window.confirm("Post not deleted!"))
          }
        
        
          const handleDelete2 = () => {
            (deck.cards.id).then(() => {
              navigate(`/my-decks`)
            });
          };
        
        
          const deleteButton2 = () => {
            if (deck.userProfileId === dbUserObject.id) {
                return <IconButton onClick={ alertClick2 } className="post-finish"><DeleteIcon /></IconButton>}
        
                else {
                  return ""
                }}




return ( <>
    <Container  fixed  onChange={e => setQuery(e.target.value)}>
      
      
      
        
                   
        {/* <Deck deck={deck}/> */}
        {/* <Typography variant="body2" color="text.secondary">
         </Typography><CardActions> */}
        
          
       <Typography gutterBottom variant="h5" component="div">
        
        <Button variant="outlined" color="secondary"  type="sumbit" onClick={searchAllCards} >Search</Button>
        <Button variant="outlined" color="secondary" type="submit">Save Deck</Button> 
        {deleteButton()}
        
        <TextField id="outlined-basic"  label="Search"  variant="outlined" 
            /> <Card>
            <ListItem>User Name: {deck.userProfile?.name}</ListItem>
            <ListItem>Deck Name: {deck.name}</ListItem>
            <ListItem>Format: {deck.format}</ListItem>
            <ListItem>
              {deck.cards?.map((card) => (
                           <div key={card.id}>
                            <div> <img src={card.image_uris?.small}/> </div>  
                            <ListItem>Card Name: {card.name}</ListItem>
                            <ListItem>ManaCost: {card.manaCost}</ListItem>
                            <ListItem>CMC: {card.cmc}</ListItem> 
                            <ListItem>Colors: {card.colors}</ListItem> 
                            {deleteButton2()}
                        </div>
                        ))} </ListItem>  
      </Card>
      </Typography>

      
      
      
      {/* </CardActions> */}
   
    </Container>  
    <Grid container spacing={2.5}>
  {cards?.map((card) => {
              
              return  <DeckMagicCards key={card.id} card={card} deckId={id} />
              
            })} 
           </Grid>   
</>   );


}