// src/app/page.js or your main file
import React from 'react';
import Page from '../Page';
import { UserProvider } from '../context/UserContext'; // Adjust path as necessary
import './globals.css';


function MainPage() {
  return (
    <UserProvider>
      <Page />
    </UserProvider>
  );
}

export default MainPage;
