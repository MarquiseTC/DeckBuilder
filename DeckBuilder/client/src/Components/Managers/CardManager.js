const baseUrl = `/api/Card`

export const addCard = (singleCard) => {
    return fetch(baseUrl,{
        method: "POST",
        headers:{
            
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleCard),
    })
    .then(r => r.json())
};

export const getAllCards = () => {
    return fetch(baseUrl) 
      .then((res) => res.json())
  };

  export const getCardById = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json())};

    export const saveCardToDeck = (newObject) => {
        return fetch("https://localhost:5001/api/UsedCards",{
            method: "POST",
            headers:{
                
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObject),
        })
    };

    export const deleteCardFromDeck =(id) => {
        return fetch(`https://localhost:5001/api/UsedCards/${id}`, {
            method: "DELETE",
        })
    }
        