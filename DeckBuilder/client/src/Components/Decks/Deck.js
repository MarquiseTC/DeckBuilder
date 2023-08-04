import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import { List, ListItem } from '@mui/material';

export const Deck = ({deck}) => {
  return (
    <Card sx={{ maxWidth: 345 }} >
      
      <CardContent    >
                    <List >
                        <ListItem>Name: {deck.name}</ListItem>
                        <ListItem>Format {deck.format}</ListItem>
                        <ListItem>Posted By: {deck.userProfile.name}</ListItem>
                        <ListItem> {deck.cards.map(card => (
                            <div key ={card.Id}> <ul>
                            Card Name: {card.name}
                            ManaCost: {card.manaCost}
                            CMC: {card.cmc}
                            Colors: {card.colors}
                            Card Limit: {card.cardLimit}
                           </ul> </div>
                        ))}          </ListItem> 
                        
                    </List>
    
                </CardContent>
            </Card>
  );
}