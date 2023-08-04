const apiUrl = 'https://localhost:5001/api/Deck';

export const getAllDecks = () => {
    return fetch(apiUrl).then((res) => res.json())
};

export const getDeckById = (id) => {
    return fetch(`${apiUrl}/GetUserDecks/${id}`).then((res) => res.json());
};

export const searchDecks = (query)=> { //http GET by Search `/api/Deck/search?q=<query>`
    return fetch(`${apiUrl}/search?q=${query}&sortDesc=true`)
    .then((res)=> res.json())
  };