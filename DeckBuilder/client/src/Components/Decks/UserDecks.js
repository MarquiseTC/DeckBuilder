
import { useEffect, useState } from "react"
import { getDeckById, getUserDeckById } from "../Managers/DeckManager";
import { Deck } from "./Deck";


export const UserDecks = () => {
    const [userDecks, setUserDecks] = useState([]);
    const localDBUser = localStorage.getItem("userProfile")
    const dbUserObject = JSON.parse(localDBUser)

    useEffect(() => {
        getUserDeckById(dbUserObject.id)
        .then((data) => {
            setUserDecks(data)
        })

        .catch((error) => {
            console.log("Can't fetch user decks:" , error)
        });
    }, [dbUserObject.id]);

    

    return (<>
    
        
              
                {userDecks.map((deck) => {
                
                  return  <Deck  deck={deck} />
                })}
              
            
      
      </>)


}