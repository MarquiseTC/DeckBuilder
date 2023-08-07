const baseUrl = `/api/Card`

export const addCard = (singleCard) => {
    return fetch(baseUrl,{
        method: "Post",
        headers:{
            "Content-Type": "application/json",
        },
        body: json.stringify(singleCard),
    });
};