const baseUrl = `https://api.scryfall.com/cards/`


    
export const searchCards = (query) => {
   return fetch(`https://api.scryfall.com/cards/search?q=${query}`)
    .then( r=> r.json())
   .then(taco => {
    return taco.data
   })
}


