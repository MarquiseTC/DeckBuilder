import React from "react";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IconButton, List, ListItem } from "@mui/material";
import { Container } from "reactstrap";
import { addCard, deleteCard, saveCardToDeck } from "../Managers/CardManager";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import DeleteIcon from '@mui/icons-material/Delete'

export const DeckMagicCards = ({card, deckId}) => {
    
    
    
        const handleSaveButtonClick = (event) => {
            event.preventDefault()
        
            const sendCardToApi = {
              Name: card.name,
              ManaCost: card?.mana_cost,
              CMC: card?.cmc,
              Colors: card?.colors[0],
              Image: card?.image_uris.small
              
            }
        
            return addCard(sendCardToApi)
            .then(returnedCard => {
                //build new object for db. Should contain DeckId and new Card Id
                const saveCard ={
                    deckId: +deckId,
                    cardId: returnedCard.id
                }
                //CardId should be returnedCard.id
                //make fetch to usedCard table in api
            saveCardToDeck(saveCard)
                
            })
          }
          
          
          
          
            
          
        
        return (
            <Container fixed>
        <Card fixed >
             
            
            <CardContent>
                <List>
                <ListItem><div> <img src={card.image_uris?.normal}/> </div> </ListItem> 
                <ListItem>Card Name: {card.name}</ListItem>
                <ListItem>ManaCost: {card?.mana_cost}</ListItem>
                <ListItem>CMC: {card?.cmc}</ListItem>
                <ListItem>Colors: {card?.colors}</ListItem>
                
                </List>
                <Button className="btn btn-primary"  onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} >Add to deck</Button>
                
            </CardContent>
            
        </Card>
        </Container>
    )}
    
    