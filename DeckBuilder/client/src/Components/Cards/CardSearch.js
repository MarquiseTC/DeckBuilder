import { useState } from "react"
import { searchCards } from "../Managers/CardManager";

import { Button, Card } from "reactstrap";
import  Box  from "@mui/material/Box";
import  TextField  from "@mui/material/TextField";
import { MagicCards } from "./Cards";


 export const CardSearch = () => {
    const [cards, setCards] = useState([]);
    const [query, setQuery] = useState("")


const searchAllCards = (e) => {
    e.preventDefault()
    searchCards(query).then(card => 
     {  console.log(card) 
        setCards(card)}
        )
};

return (
<>
    
    <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          
        onChange={e => setQuery(e.target.value)} 
        
         
        >
          <TextField id="outlined-basic"  label="Search"  variant="outlined" 
            />
            
            <Button variant="outlined" color="secondary"  type="sumbit" onClick={searchAllCards} >Search</Button>
            <div className="deck-list">
      <div className="row justify-content-center">
        <div className="cards-column">
            <div id="stuff"></div>
        {cards.map((card) => {
              console.log(card)
              return  <MagicCards key={card.id} card={card} />
            })}
        
          
        </div>
      </div>
    </div>
           </Box> 
        
      
      </>
      )}

// fetch("https://api.scryfall.com/cards/search?q=jace")
//     .then( r=> r.json())
//     .then(x => {
//         // x.data.forEach(y => document.querySelector("#stuff").innerHTML += `<img src=${y.image_uris.normal}>`)
//             console.log(x)
        
//     }
//     )

//         fetch ("https://api.scryfall.com/cards/search?q=wolf")
//     .then((res) => res.json())
//     .then(returnedItems => {  
//        console.log(returnedItems);
//        return returnedItems.name
// })
 