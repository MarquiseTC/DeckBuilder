import React from "react";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia, List, ListItem } from "@mui/material";

export const MagicCards = ({card}) => {
    console.log(card)
    return (
    <Card sx={{ maxWidth: 500 }} >
        <div> <img src={card.image_uris.small}/> </div> 
        
        <CardContent>
            <List>
            <ListItem>Card Name: {card.name}</ListItem>
            <ListItem>ManaCost: {card.mana_cost}</ListItem>
            <ListItem>CMC: {card.cmc}</ListItem>
            <ListItem>Colors: {card.colors}</ListItem>
            
            </List>
        </CardContent>
    </Card>
)}

