import React from "react"

import { Route, Routes } from "react-router-dom"
import Hello from "../Auth/Hello"
import AsyncAwait from "../Cards/Cards";
import { CommunityDecks, DeckList } from "../Decks/DeckList";
import { UserDecks } from "../Decks/UserDecks";
import MultilineTextFields from "../Cards/AdvancedContainer";
import BasicTextFields from "../Cards/BasicSearch";

export const ApplicationViews = () => {
	return (
	
		<Routes>
            
			<Route path="/" element={<Hello/>}/>
			<Route path="/decks" element={<DeckList/>}/>
			<Route path="/my-decks" element={<UserDecks/>}/>
			<Route path="/advanced" element={<MultilineTextFields/>}/>
			<Route path="/search" element={<BasicTextFields/>}/>
		</Routes>
	
	);
	 

	
}