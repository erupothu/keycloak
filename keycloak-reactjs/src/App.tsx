import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web'


import Homepage from './pages/Homepage';
import Securedpage from './pages/Securedpage';
import Admin from './pages/Adminpage';
import User from './pages/UserPage';
import keycloak from './keycloak'

function App() {

  const eventLogger = (event: unknown, error: unknown) => {
    console.log('onKeycloakEvent', event, error)
  }
  
  const tokenLogger = (tokens: unknown) => {
    console.log('onKeycloakTokens', tokens)
  }

  return (
    <div className="App">
      App Page
      <React.StrictMode>
      <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/secured" element={<Securedpage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>

      </ReactKeycloakProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
