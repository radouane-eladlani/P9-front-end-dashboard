import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";

// la function Proteines permet de retourner le composant avec le style
function Proteines({ proteines }) {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src={require("../../assets/protein-icon.png")} alt="Logo proteines" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>{proteines}g</span>
                    <p>Proteines</p>
                </div>
            </div>
        </div>
    );
}
// proteines.propTypes permet de valider que la propriété 'proteines' est un nombre
Proteines.propTypes = {
    proteines: PropTypes.number.isRequired // La propriété 'proteines' doit être un nombre et est requise
};

export default Proteines;
