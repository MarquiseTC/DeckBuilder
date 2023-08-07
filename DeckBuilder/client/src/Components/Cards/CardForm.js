import { useState } from "react"
import { addCard } from "../Managers/CardManager"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const CardForm = () => {
    const navigate = useNavigate
    const [card, update] = useState({
        name:"",
        manaCost:"",
        cmc:"",
        colors:"",
        cardLimit:""

    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    const sendCardToApi ={
        Name: card.name,
        ManaCost:card.manaCost,
        CMC: card.cmc,
        Colors: card.colors,
    }

    return addCard(sendCardToApi).then(navigate(`/decks`))
}
return(
<Button className="btn btn-primary"
        onClick={
            (clickEvent) => handleSaveButtonClick(clickEvent)
    }>
        Submit Post</Button>
)
}