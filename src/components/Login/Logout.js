import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './logout.css'


export const LogoutButton = () => {
    const { logout } = useAuth0();

    return <p className="text-logout">
            {/* <Profile/> */}
            <button className="btn btn-danger pl-8" onClick={() => logout({returnTo: window.location.origin})}>Log out</button></p>
}