const baseUrl = `/api/Card`

export const addCard = (singleCard) => {
    return fetch(baseUrl,{
        method: "POST",
        headers:{
            
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleCard),
    });
};

export const getAllCards = () => {
    return fetch(baseUrl) 
      .then((res) => res.json())
  };

  export const getCardById = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json())}