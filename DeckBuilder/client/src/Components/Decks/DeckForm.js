import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCards } from "../Managers/CardManager";
import { useEffect } from "react";
import { addDeck } from "../Managers/DeckManager";
import { Box, Button, Container, Stack, TextField, ThemeProvider, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from "@mui/material";

import { MagicCards } from "../Cards/Cards";
import { searchCards } from "../Managers/SearchManager";
import theme from "../Views/Styles";

export const DeckForm = () => {
    const localDBUser = localStorage.getItem("userProfile");
    const dbUserObject = JSON.parse(localDBUser)
    const navigate = useNavigate();
//     const [cards, setCards] = useState([])
    

// const getCards = () => {
//     getAllCards().then(allCards => setCards(allCards));
// }

// useEffect(() =>{
//     getCards()
// }, [])


const [deck, update] = useState({
    userProfileId:dbUserObject.id,
    name: "",
    format:"",
    cards:[],
    

    // dateCreated: Date.now()
    

})
const handleSaveButtonClick = (event) => {
    event.preventDefault()
    console.log("You clicked the  button.")



const deckToSendToApi ={
    UserProfileId:dbUserObject.id,
    Name: deck.name,
    Format: deck.format,
    Cards: deck?.cards
    
    // DateCreated: Date.now()
    
    
}
return addDeck(deckToSendToApi)
        .then( returnedDeck=> {
        navigate(`/deck/${returnedDeck.id}`)
        })
    
    };

    const selectList = (event) => {
        const copy = {
            ...deck
        }
        copy.format = event.target.value
        update(copy)
    }

return (
    
    
        <Container >
        <form autoComplete="off"   >
            <h2>Deck Form</h2>
            <Stack spacing={2} direction="column" sx={{marginBottom: 1}} >
               
                 <TextField
           type="text" 
           variant="outlined" 
            color="primary"        
            label="Deck Name"        
            onChange={
                (evt) => {
                    const copy = {...deck}
                    copy.name = evt.target.value
                    update(copy)}}
                    value={deck.name}        
                    fullWidth
                    required
                 />
              
            
              <RadioGroup name='deck formats' value={deck.format}   aria-labelledby='deck formats'onChange={
                    (evt) => {
                        const copy = {...deck}
                        copy.format = evt.target.value
                        update(copy)}}>
            <FormControlLabel control={<Radio/>} label='Standard' value='Standard'/>
            <FormControlLabel control={<Radio/>} label='Commander' value='Commander'/>
            <FormControlLabel control={<Radio/>} label='Modern' value='Modern'/>
            <FormControlLabel control={<Radio/>} label='Legacy' value='Legacy'/>
            <FormControlLabel control={<Radio/>} label='Casual' value='Casual'/>
                        
            </RadioGroup>
                 
            
            
            <Button variant="outlined" color="primary" type="submit" onClick={handleSaveButtonClick}> Create Deck </Button>
            
           
        {/* onClick={() => navigate(`/deck/${deck.id}`)} */}
          
        
                 {/* <TextField
           type="text" 
           variant="outlined" 
            color="secondary"        
            label="Where are you eating?"        
            onChange={
                (evt) => {
                    const copy = {...meal}
                    copy.location = evt.target.value
                    update(copy)}}
                    value={meal.location}        
                    fullWidth
                    required
                    sx={{mb: 4}}
                 />
                 <TextField
           type="date" 
           variant="outlined" 
            color="secondary"        
            label=""        
            onChange={
                (evt) => {
                    const copy = {...meal}
                    copy.dateCreated = evt.target.value
                    update(copy)}}
                    value={meal.dateCreated}        
                    fullWidth
                    required
                    sx={{mb: 4}}
                 /> */}
                 
                </Stack>   
                 </form>
            </Container>  
     
       
    
)


}