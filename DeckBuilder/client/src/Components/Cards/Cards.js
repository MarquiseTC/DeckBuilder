import React from "react";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { List, ListItem } from "@mui/material";
import { Container } from "reactstrap";
import { CardForm } from "./CardForm";
import { addCard } from "../Managers/CardManager";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";



export const MagicCards = ({card}) => {
    

const navigate = useNavigate();

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
    
        const sendCardToApi = {
          Name: card.name,
          ManaCost: card?.mana_cost,
          CMC: card?.cmc,
          Colors: card?.colors[0],
          CardLimit: card.frame
        }
    
        return addCard(sendCardToApi).then(navigate(`/decks`))
      }
    
    
    return (
        <Container>
    <Card sx={{ maxWidth: 500}} >
       {CardForm} <div> <img src={card.image_uris?.normal}/> </div>  
        
        <CardContent>
            <List>
            <ListItem></ListItem>
            <ListItem>Card Name: {card.name}</ListItem>
            <ListItem>ManaCost: {card?.mana_cost}</ListItem>
            <ListItem>CMC: {card?.cmc}</ListItem>
            <ListItem>Colors: {card?.colors}</ListItem>
            
            </List>
            <Button className="btn btn-primary"  onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>Add Card</Button>
        </CardContent>
        
    </Card>
    </Container>
)}

