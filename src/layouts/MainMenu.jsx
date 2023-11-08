import React from "react";
import { Outlet } from "react-router-dom";
import NarBarMain from "./NavBarMain";
import Toast from "../components/Toast";

export default function MainMenu() {

    return (
        <div className="min-h-full">
            <NarBarMain />
            <Outlet />
            <Toast />
        </div>
    );

    
    /*
    Redirections IF HAS Auth-User System 
    // Componente de "carregamento" mais elaborado
    if (loadingUser) { return <p>Carregando...</p> }

    // Se o usuário não está mais sendo carregado, mas o token ainda não existe, redirecione para o login
    if (!userToken) { return <Navigate to="login" /> }

    if (currentUser.user_type === 'editor') {
        return (
            <div className="min-h-full">
                <NavBarEditor setCurrentUser={setCurrentUser} setUserToken={setUserToken} />
                <Outlet />
                <Toast />
            </div>
        );
    }
    else if (currentUser.user_type === 'user') {
        return (
            <div className="">
                <NavBarUser setCurrentUser={setCurrentUser} setUserToken={setUserToken} />
                <Outlet />
                <Toast />
            </div>

        );
    } else if (currentUser.user_type === 'admin') {
        return (
            <div className="">
                <NavBarAdmin setCurrentUser={setCurrentUser} setUserToken={setUserToken} />
                <Outlet />
                <Toast />
            </div>
        );
    }
    else { return <Navigate to="login" /> } 
    */

}