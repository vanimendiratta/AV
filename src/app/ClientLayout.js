// src/app/ClientLayout.js

"use client";

import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/Store'; // Adjust the path as necessary
import { UserProvider } from '../context/UserContext'; // Adjust the path as necessary
import { PersistGate } from 'redux-persist/integration/react';
import  { persistor } from '../Redux/Store'; // Adjust the path as necessary
export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
      <UserProvider>
        {children}
      </UserProvider>
      </PersistGate>
    </Provider>
  );
}