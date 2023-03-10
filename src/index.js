
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'; //EC: Import Bootstrap

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider 
  domain='dev-h1yxcffffouv6jbm.us.auth0.com' 
  clientId='ls1Jk5nmpRldmbW8eJciHzKsJlTNFVPU' 
  redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);