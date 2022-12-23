import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if(isLoading){
        return <div><img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png" alt="Loading"/></div>
    }

    return (
        isAuthenticated && (
            <div>
                <p className='text'><small>Hola, bienvenido/a {user.name}</small></p>
            </div>
        )
    )
};
