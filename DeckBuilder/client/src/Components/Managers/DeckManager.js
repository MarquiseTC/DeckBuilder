const apiUrl = '/api/Deck';

export const getAllDecks = () => {
    return fetch(apiUrl).then((res) => res.json())
};

export const getUserDeckById = (id) => {
    return fetch(`${apiUrl}/GetUserDecks/${id}`).then((res) => res.json());
};

export const searchDecks = (query)=> { //http GET by Search `/api/Deck/search?q=<query>`
    return fetch(`${apiUrl}/search?q=${query}&sortDesc=true`)
    .then((res)=> res.json())
  };

  export const addDeck = (singleDeck) => {
    return fetch(apiUrl, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleDeck),
    }).then(r => r.json())
};

export const getDeckById = (id) => {
    return fetch(`${apiUrl}/${id}`).then((res) => res.json())
};

export const deleteDeck = (id) => {
    return fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
    })
    .then(() => getAllDecks())
};
    
export const editDeck = (deck) => {
    console.log(deck)
    return fetch(`${apiUrl}/${deck.Id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(deck)
    }).then(() => getAllDecks())
  }
