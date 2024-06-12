import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

/*la function Navbar permet de retourner le composant Navbar avec le style*/
function Navbar() {
    return (
        <nav className="navbar">
           <div className="navbar_logo">
                <img src={logo} alt="Logo SportSee" />
            </div>

            <span> Accueil</span>
           
            <span> Profil</span>

            <span> Réglage</span>

            <span> Communauté</span>
            
        </nav>
    );
}
export default Navbar;