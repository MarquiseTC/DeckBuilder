// import { card } from "mtgsdk";
// import React,{useEffect, useState} from "react";

// const AsyncAwait = () => {
//     const [cards, setCards] = useState([])
//     const id = 2

//     const fetchData = async () => {
//         const response = await fetch(`https://api.scryfall.com/cards/multiverse/${id}`)
//         const data = await response.json()
//         setCards(data)
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//    console.log(cards)
    
// }

// export default AsyncAwait

import { card, set } from 'mtgsdk'

card.find(3)
.then(result => {
    console.log(result.card.name) // "Black Lotus"
})

set.find('AER')
.then(result => {
    console.log(result.set.name) // "Aether Revolt"
})


