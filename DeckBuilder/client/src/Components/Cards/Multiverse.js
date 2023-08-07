import React from "react";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia, List, ListItem } from "@mui/material";
import { Container } from "reactstrap";

export const Multiverse = ({cat}) => {
    
    return (
        <Container>
    <Card sx={{ maxWidth: 500}} >
        <div> <img src={cat.image_uris?.normal}/> </div>  
        
        {/* <CardContent>
            <List>
            <ListItem></ListItem>
            <ListItem>Card Name: {card?.name}</ListItem>
            <ListItem>ManaCost: {card?.mana_cost}</ListItem>
            <ListItem>CMC: {card?.cmc}</ListItem>
            <ListItem>Colors: {card?.colors}</ListItem>
            
            </List>
        </CardContent> */}
    </Card>
    </Container>
)}
