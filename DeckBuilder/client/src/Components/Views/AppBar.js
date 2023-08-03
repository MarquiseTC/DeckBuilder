import * as React from 'react';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
import { format } from 'date-fns';
import { logout } from '../Managers/UserManager';

;






export const ButtonAppBar = ({isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate()
  

 
  return (
      <AppBar  sx={{ minHeight: ".1rem"}}  position="relative" >
        
        
        <Toolbar>
          <>
           {isLoggedIn && 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" type="submit" onClick={() => navigate("/")}>Deck Builder</Button> 
          Today is { format(new Date(), 'MMMM do Y')}
          
          
          <Button color="inherit" type="submit" onClick={() => navigate("/deck/create")}>New Deck</Button>
          <Button color="inherit" type="submit" onClick={() => navigate("/decks")}>My Decks</Button>
          <Button color="inherit" type="submit" onClick={() =>{logout() ;setIsLoggedIn(false)}}>Logout</Button>
            </Typography>}</>             
        </Toolbar>

        {!isLoggedIn &&
        <>
        
        <Button color="inherit" type="submit" onClick={() => navigate("/login")}>Login</Button>
        <Button color="inherit" type="submit" onClick={() => navigate("/register")}>Register</Button>
      </> }
      </AppBar>
  );
}