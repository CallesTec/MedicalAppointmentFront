import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './login.css'

export const LoginButton = () => {
   const {loginWithRedirect} = useAuth0();

   return <div className="container">
                <p className="text-button"><img src='https://i.imgur.com/jPKajSF.png' className='App-logo' alt='logo' /> <br/>
                <button className="btn btn-primary" onClick={ () => loginWithRedirect() }>Login</button></p>
        </div>
   
}