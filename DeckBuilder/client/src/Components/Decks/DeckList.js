import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllDecks, searchDecks } from "../Managers/DeckManager";
import { Deck } from "./Deck";
import { BasicTextFields } from "../Cards/CardSearch";
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { bodyTheme } from "../Views/Styles";

export const DeckList = () => {
    const [decks, setDecks] = useState([]);
    const [query, setQuery] = useState("");
    
  
  

    const getDecks = () => {
        getAllDecks().then(allDecks => setDecks(allDecks));
    };

    const searchAllDecks = (e) => {
      e.preventDefault()
      searchDecks(query).then(deck => setDecks(deck));
     
    };
    

useEffect(() => {
    getDecks();
}, [])

return (<>
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onChange={e => setQuery(e.target.value)} >
    <TextField id="outlined-basic"  label="Deck Search"  variant="outlined" 
        />
        
        <Button variant="outlined" color="secondary"  type="sumbit" onClick={searchAllDecks} >Search</Button>
       </Box> 
    {decks.map((deck) => {
              
              return  <Deck key={deck.id} deck={deck} />
            })}
     </>
  )

}
    
      
    
          
            
          
        

  