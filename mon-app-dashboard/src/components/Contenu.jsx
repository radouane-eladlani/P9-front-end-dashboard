import React from "react";
import "./Contenu.css";
import Activite from "./data/Activite";
import SessionSport from "./data/SessionSport";
import RadarPerform from "./data/RadarPerform";
import ScoreObjectif from "./data/ScoreObjectif";

function Contenu() {
    return (
        <div className="container">
            <h1>Bonjour <span className="h1Red">prenom </span></h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            <div className="widthFlex">
                <div className="activity">
                <Activite />
            </div>
            <div className="flexbox">
                <SessionSport />
                <RadarPerform />
                <ScoreObjectif />
            </div>
            </div>
            
        </div>
    );
}

export default Contenu;
