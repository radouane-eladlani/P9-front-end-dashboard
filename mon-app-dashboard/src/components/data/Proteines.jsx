import React from "react";
import "./Nutrition.css";

/* la function  permet de retourner le composant  avec le style */
function Proteines() {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src={require("../../assets/protein-icon.png")} alt="Logo proteines" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>155g</span>
                    <p>Protéines</p>
                </div>

            </div>

        </div>

    );
}
export default Proteines;