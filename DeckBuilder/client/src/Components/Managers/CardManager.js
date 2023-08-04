const baseUrl = `https://api.scryfall.com/cards/`

// export const searchCards = (query) => {
//     return fetch(`https://api.scryfall.com/cards/search?q=${query}`)
//     .then( r=> r.json())
//     .then(x => {
//         x.data.forEach(y => document.querySelector("#stuff").innerHTML += `<img src=${y.image_uris.normal}>`)
//             console.log(x)
        
//     }
//     )}
    
export const searchCards = (query) => {
   return fetch(`https://api.scryfall.com/cards/search?q=${query}`)
    .then( r=> r.json())
   .then(taco => {
    return taco.data
   })
}


// .then(x => {
//     // x.data.forEach(y => document.querySelector("#stuff").innerHTML += `<img src=${y.image_uris.normal}>`)
//         console.log(x)
    
// }
// )