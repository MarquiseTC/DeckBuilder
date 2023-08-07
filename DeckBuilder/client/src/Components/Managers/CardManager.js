const baseUrl = `/api/Card`

export const addCard = (singleCard) => {
    return fetch(baseUrl,{
        method: "Post",
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

  