import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";

function Lipides({ lipides }) {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src={require("../../assets/fat-icon.png")} alt="Logo lipides" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>{lipides.toLocaleString()} g</span>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    );
}

Lipides.propTypes = {
    lipides: PropTypes.number.isRequired
};

export default Lipides;
