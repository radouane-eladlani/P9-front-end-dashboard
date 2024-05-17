import React from "react";
import Banner from "../components/Banner.jsx";
import "./PageAccueil.css";
import Navbar from "../components/Navbar.jsx";
import Contenu from "../components/Contenu.jsx";


/*la function app permet de 
retourner les composants Banner et Grille*/
function PageAccueil() {
  /* on utilise le composant Banner et Grille dans 
App pour les afficher sur la page */
  return (
    <>
      <Navbar />
      <Contenu />
      <Banner />
    </>
  );
}

export default PageAccueil
