
import { useEffect, useState } from "react"
import { getDeckById } from "../Managers/DeckManager";
import { Deck } from "./Deck";
import BasicTextFields from "../Cards/CardSearch";

export const UserDecks = () => {
    const [userDecks, setUserDecks] = useState([]);
    const localDBUser = localStorage.getItem("userProfile")
    const dbUserObject = JSON.parse(localDBUser)

    useEffect(() => {
        getDeckById(dbUserObject.id)
        .then((data) => {
            setUserDecks(data)
        })

        .catch((error) => {
            console.log("Can't fetch user decks:" , error)
        });
    }, [dbUserObject.id]);

    

    return (<>
    
        <div className="deck-list">
          <div className="row justify-content-center">
            <div className="cards-column">
              
                {userDecks.map((deck) => {
                //   console.log(deck)
                  return  <Deck  deck={deck} />
                })}
              
            </div>
          </div>
        </div>
      
      </>)


}