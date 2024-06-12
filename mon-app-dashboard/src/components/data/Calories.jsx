import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";

function Calories({ calories }) {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src={require("../../assets/calories-icon.png")} alt="logo calories" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>{calories.toLocaleString()}kCal</span>
                    <p>Calories</p>
                </div>
            </div>
        </div>
    );
}

Calories.propTypes = {
    calories: PropTypes.number.isRequired
};

export default Calories;
