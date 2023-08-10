import * as React from 'react';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { logout } from '../Managers/UserManager';

import { Avatar, ThemeProvider, createTheme } from '@mui/material';
import { themeOptions } from './Styles';
import { orange } from '@mui/material/colors';


export const ButtonAppBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()
  const localDBUser = localStorage.getItem("userProfile");
  const dbUserObject = JSON.parse(localDBUser)

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[200]
      }
    }
  });
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (

    <ThemeProvider theme={theme}>
      <AppBar sx={{ minHeight: ".1rem" }} position="static"  >


        <Toolbar>

          {isLoggedIn &&
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit" type="submit" onClick={() => navigate("/")}>Deck Builder</Button>
            Today is {format(new Date(), 'MMMM do Y')}




              <Button color="inherit" type="submit" onClick={() => navigate("/create")}>New Deck</Button>
              <Button color="inherit" type="submit" onClick={() => navigate("/decks")}>Community Decks</Button>
              <Button color="inherit" type="submit" onClick={() => navigate("/my-decks")}>My Decks</Button>
              <Button color="inherit" type="submit" onClick={() => navigate("/search")}>Search</Button>
              
              <Button color="inherit" type="submit" onClick={() => { logout(); setIsLoggedIn(false) }}>Logout</Button>
              {/* <Avatar{...stringAvatar(dbUserObject.name) }/>   */}

            </Typography>} </Toolbar>

        {!isLoggedIn &&



          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" type="submit" onClick={() => navigate("/login")}>Login</Button>
            <Button color="inherit" type="submit" onClick={() => navigate("/register")}>Register</Button>
          </Typography>}
      </AppBar>
    </ThemeProvider>);
}