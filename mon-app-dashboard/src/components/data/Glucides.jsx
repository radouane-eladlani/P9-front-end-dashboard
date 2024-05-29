import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";

function Glucides({ glucides }) {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src={require("../../assets/carbs-icon.png")} alt="Logo glucides" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>{glucides.toLocaleString()} g</span>
                    <p>Glucides</p>
                </div>
            </div>
        </div>
    );
}

Glucides.propTypes = {
    glucides: PropTypes.number.isRequired
};

export default Glucides;
