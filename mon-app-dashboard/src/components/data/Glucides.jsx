import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";

// la function Glucides permet de retourner le composant avec le style

function Glucides({ glucides }) {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src={require("../../assets/carbs-icon.png")} alt="Logo glucides" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>{glucides}g</span>
                    <p>Glucides</p>
                </div>
            </div>
        </div>
    );
}
// Glucides.propTypes permet de valider que la propriété 'glucides' est un nombre
Glucides.propTypes = {
    glucides: PropTypes.number.isRequired // La propriété 'glucides' doit être un nombre et est requise
};

export default Glucides;
