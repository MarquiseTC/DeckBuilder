import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import { Link, List, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Deck = ({deck}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }} >
      
      <CardContent   >
        
                    <List > 
                        <Link onClick={() => navigate(`/deck/:id`)}> Name: {deck.name}</Link>
                        <ListItem>Format: {deck.format}</ListItem>
                        <ListItem>Posted By: {deck.userProfile?.name}</ListItem>
                        {/* <ListItem> {deck.cards.map(card => (
                            <div key ={card.Id}> <ul>
                            <ListItem>Card Name: {card.name}</ListItem>
                            <ListItem>ManaCost: {card.manaCost}</ListItem>
                            <ListItem>CMC: {card.cmc}</ListItem> 
                            <ListItem>Colors: {card.colors}</ListItem> 
                            <ListItem>Card Limit: {card.cardLimit}</ListItem>
                           </ul> </div>
                        ))}          </ListItem> 
                         */}
                    </List>
    
                </CardContent>
            </Card>
  );
}