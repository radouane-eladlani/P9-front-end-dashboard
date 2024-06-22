import React, { useState, useEffect } from "react";
import "./Contenu.css";
import Activite from "./data/Activite";
import SessionSport from "./data/SessionSport";
import RadarPerform from "./data/RadarPerform";
import ScoreObjectif from "./data/ScoreObjectif";
import Calories from "./data/Calories";
import Proteines from "./data/Proteines";
import Glucides from "./data/Glucides";
import Lipides from "./data/Lipides";
import useFetch from "../utils/useFetch";
import UserModel from "../model/UserModel";
import { useParams } from "react-router-dom";
import ErreurPage from "../page/ErrorPage";


function Contenu() {
    const { id } = useParams(); //On récupère l'ID de l'utilisateur depuis l'URL
    const [userData, setUserData] = useState(); // État pour stocker les données utilisateur
    // Utilisation du hook useFetch pour récupérer les données utilisateur
    const { data, loading, error } = useFetch(`http://localhost:3001/user/${id}`);

    // useEffect pour mettre à jour les données utilisateur lorsque les données changent
    useEffect(() => {
        if (data) {
            setUserData(new UserModel(data)); // recuperer les données 
        }
    }, [data]); // Mise à jour de l'état lorsque les données changent

    // Affiche un message de chargement si les données sont en cours de récupération
    if (loading) {
        return <div>Chargement...</div>;
    }

    // Affiche un message d'erreur si une erreur survient lors de la récupération des données
    if (error) {
        return <div className="erreur">{<ErreurPage/>}</div>;
    }

    //Si userData est disponible, on initialise les variables avec les données correspondantes,
    // sinon on utilise des valeurs par défaut (chaîne vide pour le prénom, 0 pour les compteurs)
    const firstName = userData ? userData.firstName : "";
    const calories = userData ? userData.calorieCount : 0;
    const proteines = userData ? userData.proteinCount : 0;
    const glucides = userData ? userData.carbohydrateCount : 0;
    const lipides = userData ? userData.lipidCount : 0;

    // Retournes les composant avec le style 
    return (
        <>
            <div className="titre">
                <h1>Bonjour <span className="h1Red">{firstName}</span></h1>
                <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
            </div>
            <div className="containerGlobal">
                <div className="container">
                    <div className="activity">
                        <Activite />
                    </div>
                    <div className="flexbox">
                        <SessionSport userId={id} />
                        <RadarPerform userId={id} />
                        <ScoreObjectif userId={id} />
                    </div>
                </div>
                <div className="flexbox2">
                    {/* Affiche les composants Calories, Proteines, Glucides et Lipides avec 
                    les donnees */}
                    <Calories calories={calories} />
                    <Proteines proteines={proteines} />
                    <Glucides glucides={glucides} />
                    <Lipides lipides={lipides} />
                </div>
            </div>
        </>
    );
}

export default Contenu; 
