import React from "react";
import { useState } from "react";

const apiUrl = "https://localhost:5001";


export const login = (userObject) => {
    return fetch(`${apiUrl}/api/UserProfile/GetByEmail?email=${userObject.email}`)
    .then((r) => r.json())
      .then((userProfile) => {
        if(userProfile.id){
          localStorage.setItem("userProfile", JSON.stringify(userProfile));
          return userProfile
        }
        else{
          return undefined
        }
      });
  };
  
  export const logout = () => {
        localStorage.clear()
  };
  
  export const register = (userObject ) => {
    return  fetch(`${apiUrl}/api/UserProfile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
    .then((response) => response.json())
      .then((savedUserProfile) => {
        localStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
      });
  };