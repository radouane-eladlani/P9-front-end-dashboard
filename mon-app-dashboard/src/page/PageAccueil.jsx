import React from "react";
import Banner from "../components/Banner.jsx";
import "./PageAccueil.css";
import Navbar from "../components/Navbar.jsx";


/*la function app permet de 
retourner les composants Banner et Grille*/
function PageAccueil() {
  /* on utilise le composant Banner et Grille dans 
App pour les afficher sur la page */
  return (
    <>
      <Navbar />
      <Banner />

    </>
  );
}

export default PageAccueil
