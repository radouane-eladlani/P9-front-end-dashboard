import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";

function Proteines({ proteines }) {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src={require("../../assets/protein-icon.png")} alt="Logo proteines" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>{proteines.toLocaleString()} g</span>
                    <p>Protéines</p>
                </div>
            </div>
        </div>
    );
}

Proteines.propTypes = {
    proteines: PropTypes.number.isRequired
};

export default Proteines;
