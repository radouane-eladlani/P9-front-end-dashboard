import React from "react";
import Banner from "../components/Banner.jsx";
import "./PageAccueil.css";
import Navbar from "../components/Navbar.jsx";
import Contenu from "../components/Contenu.jsx";

function PageAccueil() {

  return (
    <>
      <Navbar />
      <Contenu />
      <Banner />
    </>
  );
}

export default PageAccueil
