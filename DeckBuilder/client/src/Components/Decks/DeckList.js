import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllDecks, searchDecks } from "../Managers/DeckManager";
import { Deck } from "./Deck";
import { BasicTextFields } from "../Cards/BasicSearch";
import React from "react";



export const DeckList = () => {
    
    const [decks, setDecks] = useState([]);
    


    const getDecks = () => {
        getAllDecks().then(allDecks => setDecks(allDecks));
    };

    

useEffect(() => {
    getDecks();
}, [])

return (<>
<BasicTextFields></BasicTextFields>
    <div className="deck-list">
      <div className="row justify-content-center">
        <div className="cards-column">
          
            {decks.map((deck) => {
              // console.log(post)
              return  <Deck key={deck.id} deck={deck} />
            })}
          
        </div>
      </div>
    </div>
  
  </>
  )

}