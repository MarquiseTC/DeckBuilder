
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { formatSearch, searchByManaCost, searchByManaValue, searchByMultiverseId, typeSearch } from '../Managers/SearchManager';
import { Button } from '@mui/material';

import { Multiverse } from './Multiverse';
import { Container } from 'reactstrap';



export const MultiLineTextFields = () => {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("")
  

const manaCostSearch = (e) => {
  e.preventDefault() 
  searchByManaCost(query).then(card => 
    { console.log(card)
    setCards(card)}
  )
};

const manaValueSearch = (e) => {
  e.preventDefault() 
  searchByManaValue(query).then(card => 
    { console.log(card)
    setCards(card)}
  )
};

const isItLegal = (e) => {
  e.preventDefault() 
  formatSearch(query).then(card => 
    { console.log(card)
    setCards(card)}
  )
};

const whatType = (e) => {
  e.preventDefault() 
  typeSearch(query).then(card => 
    { console.log(card)
    setCards(card)}
  )
};

  return (
    <>
    <Container
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"

      onChange={e => setQuery(e.target.value)}
    >
      
        <TextField
          id="outlined-multiline-flexible" label="Colors" multiline
          maxRows={4}
        /> 
        <Button variant="outlined" color="secondary"  type="sumbit" onClick={manaCostSearch} >Search</Button>
       
   
   
    <TextField
          id="outlined-textarea"
          label="Mana Value"
          placeholder=""
          multiline
          onChange={e => setQuery(e.target.value)}
        />
                <Button variant="outlined" color="secondary"  type="sumbit" onClick={manaValueSearch} >Search</Button>
        
      
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Format"
          multiline
          maxRows={4}
          onChange={e => setQuery(e.target.value)}
        />
        <Button variant="outlined" color="secondary"  type="sumbit" onClick={isItLegal} >Search</Button>
        <TextField
          id="outlined-textarea"
          label="Type"
          placeholder=""
          multiline
          onChange={e => setQuery(e.target.value)}
        />
        <Button variant="outlined" color="secondary"  type="sumbit" onClick={whatType} >Search</Button>
      </div>
      {/* <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        /> */}
     <div className="deck-list">
      <div className="row justify-content-center">
        <div className="cards-column">
            <div id="Filteredstuff"></div>
        {cards.map((cat) => {
              
              return  <Multiverse key={cat.id} cat={cat} />
            })}
        
        </div>
      </div>
    </div>   
        
   {/* </div> */}
    </Container> </>  
   )   

} 


