import React from "react"
import { Route, Routes, Navigate } from "react-router-dom";

import { Register } from "../Auth/Register";
import { Login } from "../Auth/Login";
import MediaCard from "../Decks/Deck";




export const Authorize = ({setIsLoggedIn}) => {

    return (
         <Routes>
         <Route path="/login" element={<Login   setIsLoggedIn={setIsLoggedIn} />} />
         <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn}/>} />
         <Route path="*" element={<Navigate to="/login" />} />
         
         
         </Routes>
      );
    
   }