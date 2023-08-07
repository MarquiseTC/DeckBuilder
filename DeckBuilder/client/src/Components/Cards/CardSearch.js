import { useState } from "react"
import { searchCards } from "../Managers/SearchManager";

import { Button, Card, Container } from "reactstrap";
import  Box  from "@mui/material/Box";
import  TextField  from "@mui/material/TextField";
import { MagicCards } from "./Cards";
import { useNavigate } from "react-router-dom";


 export const CardSearch = () => {
    const [cards, setCards] = useState([]);
    const [query, setQuery] = useState("")
    const navigate = useNavigate()


const searchAllCards = (e) => {
    e.preventDefault()
    searchCards(query).then(card => 
     {  console.log(card) 
        setCards(card)}
        )
};

return (
<>
    
    <Container 
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
            <Button color="inherit" type="submit" onClick={() => navigate("/advanced")}>Advanced Search</Button>
            <div className="deck-list">
      <div className="row justify-content-center">
        <div className="cards-column">
            <div id="Filteredstuff"></div>
        {cards.map((card) => {
              
              return  <MagicCards key={card.id} card={card} />
            })}
        
          
        </div>
      </div>
    </div>
          </Container> 
        
      
      </>
      )}

