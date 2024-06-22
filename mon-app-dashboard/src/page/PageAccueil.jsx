import React from "react";
import Banner from "../components/Banner.jsx";
import "./PageAccueil.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Contenu from "../components/Contenu.jsx";
import ErrorPage from "./ErrorPage.jsx";


// la function PageAccueil permet de retourner les composants
function PageAccueil() {

  return (
    <>

      <Navbar />
      <Routes>
      <Route path="/" element={<Navigate to="/user/12" replace />} />
        <Route path="/user/:id" element={<Contenu />} />
        <Route path="*" element={<ErrorPage/>} /> {/* Route pour gérer les pages non trouvées */}
      </Routes>
      <Banner />

    </>
  );
}

export default PageAccueil
