import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";

// la function calorie permet de retourner le composant avec le style
function Calories({ calories }) {
    return (
        <div className="bgroundNutrition">
            <div className="center"> 
                <img src={require("../../assets/calories-icon.png")} alt="logo calories" />
            </div>
            <div className="flexBoxNutrition"> 
                <div className="flexBoxSpan">
                    <span>{calories}kCal</span>
                    <p>Calories</p>
                </div>
            </div>
        </div>
    );
}

// calories.propTypes permet de valider que la propriété 'calories' est un nombre
Calories.propTypes = {
    calories: PropTypes.number.isRequired // La propriété 'calories' doit être un nombre et est requise
};

export default Calories;
