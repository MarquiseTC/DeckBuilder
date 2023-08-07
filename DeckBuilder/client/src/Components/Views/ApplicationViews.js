import React from "react"

import { Route, Routes } from "react-router-dom"
import Hello from "../Auth/Hello"
import AsyncAwait from "../Cards/Cards";
import { CommunityDecks, DeckList } from "../Decks/DeckList";
import { UserDecks } from "../Decks/UserDecks";

import { CardSearch } from "../Cards/CardSearch";
import { MultiLineTextFields } from "../Cards/AdvancedContainer";
import { DeckDetails } from "../Decks/DeckDetails";





export const ApplicationViews = () => {
	return (
	
		<Routes>
            
			<Route path="/" element={<Hello/>}/>
			<Route path="/decks" element={<DeckList/>}/>
			<Route path="/my-decks" element={<UserDecks/>}/>
			<Route path="/search" element={<CardSearch/>}/> 
			<Route path="/advanced" element={<MultiLineTextFields/>}/> 
			<Route path="/deck/deck/" element ={<DeckDetails/>} />
			
		</Routes>
	
	);
	 

	
}