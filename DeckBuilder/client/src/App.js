import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";


import { useEffect } from 'react';

import { AppBar, ThemeProvider, createTheme } from '@mui/material';
import { ApplicationViews } from './Components/Views/ApplicationViews';
import { ButtonAppBar, Header } from './Components/Views/AppBar';
import { Authorize } from './Components/Views/Authorize';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    useEffect(() => {
        if (!localStorage.getItem("userProfile")) {
            setIsLoggedIn(false)

        }
    }, [isLoggedIn])

    return (
        <Router>
            <ButtonAppBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            {isLoggedIn ?
                <ApplicationViews />
                :
                
                <Authorize  setIsLoggedIn={setIsLoggedIn} />
         }
        </Router>
    );
}

export default App;