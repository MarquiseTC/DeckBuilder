import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../Views/Styles";

export default function Hello() {
  const imageUrl = "https://therewillbe.games/media/reviews/photos/original/f6/63/76/how-to-play-magic-the-gathering-on-a-budget-a-complete-primer-32-1576264911.jpg"
  return ( 
    <span style={{
      
      // position: "fixed",
      // // left: 0,
      // // right: 0,
      // // top: "15%",
      // // marginTop: "-0.5rem",
      // textAlign: "center",
      // width: '100%',
      // height: '100%',
      // backgroundImage: `url(${imageUrl})`,
      // backgroundPosition:'center',
      // backgroundSize: 'cover',
      // backgroundRepeat:'no-repeat'

    }}>
    Welcome to Deckbuilder. 
    Whether you are a new player or returning player, Deck Builder is the place for you</span>
  );
}