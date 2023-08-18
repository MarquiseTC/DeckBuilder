import { Box, Link, List, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../Views/Styles";
import { Card, CardMedia, Divider,  ListItem } from "@mui/material"


export default function Hello() {
  const [alignment, setAlignment] = useState("");
  const imageUrl = "https://therewillbe.games/media/reviews/photos/original/f6/63/76/how-to-play-magic-the-gathering-on-a-budget-a-complete-primer-32-1576264911.jpg"
  return ( 
    <>
      <Typography>
        <h1>Deck Builder!</h1>
        <h2>If you're just browsing, or working on your next creation</h2>
        <h2>Deck Builder is the place for you!</h2>
      </Typography>
       <div
       style={{
         margin: "auto",
         display: "table",
       }}>
           <List>
               <Card>
               <CardMedia
                   component='img'
                   height='194'
                   image="https://1000logos.net/wp-content/uploads/2022/10/Magic-The-Gathering-logo.png"></CardMedia>
       <ListItem> 
       <Link href="https://www.youtube.com/watch?v=kzE0Zuw3Bl8">
          <span>How to build better Magic:The Gathering Decks</span>  
       </Link>
       </ListItem>
       </Card>
<Divider/>

       <Card>
       <CardMedia
                   component='img'
                   height='194'
                   image="https://1000logos.net/wp-content/uploads/2022/10/Magic-The-Gathering-logo.png"></CardMedia>
       <ListItem> <Link href="https://www.youtube.com/watch?v=q4BC8dCiYJg&t=12s">
           <span>Formats explained</span>
       </Link>
       </ListItem>
       </Card>
<Divider/>

</List>
</div>    
</>  );
}