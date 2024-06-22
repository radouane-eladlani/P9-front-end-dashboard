import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";

// la function Lipides permet de retourner le composant avec le style
function Lipides({ lipides }) {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src={require("../../assets/fat-icon.png")} alt="Logo lipides" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>{lipides}g</span>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    );
}
// Lipides.propTypes permet de valider que la propriété 'lipides' est un nombre
Lipides.propTypes = {
    lipides: PropTypes.number.isRequired // La propriété 'lipides' doit être un nombre et est requise
};

export default Lipides;
