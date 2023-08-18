import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCards } from "../Managers/CardManager";
import { useEffect } from "react";
import { addDeck, editDeck, getDeckById } from "../Managers/DeckManager";
import { Box, Container, FormControl, FormLabel, Stack, TextField, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { Button } from "reactstrap";
import { MagicCards } from "../Cards/Cards";
import { searchCards } from "../Managers/SearchManager";

export const DeckEdit = () => {
    const localDBUser = localStorage.getItem("userProfile");
    const dbUserObject = JSON.parse(localDBUser)
    const navigate = useNavigate();
    const {deckId} = useParams()
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

useEffect(() => {
    getDeckById(deckId)
    .then((deckArray) => {
        update(deckArray)
    })
}, [deckId]);

const handleSaveButtonClick = (event) => {
    event.preventDefault()
    console.log("You clicked the  button.")



const deckToEdit ={
    Id: parseInt(deckId),
    UserProfileId:dbUserObject.id,
    Name: deck.name,
    Format: deck.format,
    Cards: deck?.cards
    
    // DateCreated: Date.now()
    
    
}
return editDeck(deckToEdit)
        .then(()=>{
             navigate(`/deck/${deckId}`)
        })
       
        
    
    };

        

return (
    <>
    
        <Container >
        <form autoComplete="off"   >
            <h2>Deck Form</h2>
            <Stack spacing={2} direction="column" sx={{marginBottom: 1}} >
            <Box>
    <FormControl>
        <FormLabel id='deck'>
            New Deck
        </FormLabel >
       
    </FormControl>
</Box>      
                 <TextField
           type="text" 
           variant="outlined" 
            color="secondary"        
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
                 
            
            
            <Button color="inherit" type="submit" onClick={handleSaveButtonClick}> Save Deck </Button>
            
           
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
     
       
    </>
)


}