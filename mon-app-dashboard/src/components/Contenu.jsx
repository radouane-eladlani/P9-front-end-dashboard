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

function Contenu() {
    const [userData, setUserData] = useState(null);
    const { data, loading, error } = useFetch('http://localhost:3001/user/12');

    useEffect(() => {
        if (data) {
            
            setUserData(new UserModel(data));
        }
    }, [data]);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    const firstName = userData ? userData.firstName : "";
    const calories = userData ? userData.calorieCount : 0;
    const proteines = userData ? userData.proteinCount : 0;
    const glucides = userData ? userData.carbohydrateCount : 0;
    const lipides = userData ? userData.lipidCount : 0;


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
                        <SessionSport />
                        <RadarPerform />
                        <ScoreObjectif />
                    </div>
                </div>
                <div className="flexbox2">
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
