const baseUrl = `https://api.scryfall.com/cards`


    
export const searchCards = (query) => {
   return fetch(`https://api.scryfall.com/cards/search?q=${query}`)
    .then( r=> r.json())
   .then(taco => {
    return taco.data
   })
}

export const searchByManaCost = (query) => {
   return fetch (`https://api.scryfall.com/cards/search?q=mana:${query}`)
   .then( r => r.json())
   .then(cows => {
      return cows.data
   }) 
}

export const searchByManaValue = (query) => {
   return fetch (`https://api.scryfall.com/cards/search?q=mv:${query}`)
   .then( r => r.json())
   .then(cows => {
      return cows.data
   }) 
}

export const formatSearch = (query) => {
   return fetch (`https://api.scryfall.com/cards/search?q=f:${query}`)
   .then( r => r.json())
   .then(cows => {
      return cows.data
   }) 
}

export const typeSearch = (query) => {
   return fetch (`https://api.scryfall.com/cards/search?q=t:${query}`)
   .then( r => r.json())
   .then(cows => {
      return cows.data
   }) 
}