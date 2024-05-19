import React from "react";
import "./Contenu.css";
import Activite from "./data/Activite";
import SessionSport from "./data/SessionSport";
import RadarPerform from "./data/RadarPerform";
import ScoreObjectif from "./data/ScoreObjectif";
import Calories from "./data/Calories";
import Proteines from "./data/Proteines";
import Glucides from "./data/Glucides";
import Lipides from "./data/Lipides";

function Contenu() {
    return (
        <>
        <div className="titre">
            <h1>Bonjour <span className="h1Red">prenom </span></h1><h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            </div>
            <div className="containerGlobal">
            <div className="container">
            <div className="activity">
            <Activite />
        </div>
        <div className="flexbox">
                <SessionSport />
                <RadarPerform />
                <ScoreObjectif />
            </div>    
            </div>
            <div className="flexbox2">
                <Calories />
                <Proteines />
                <Glucides />
                <Lipides />
            </div>
            </div>
            </>   
    );
}

export default Contenu;
