import React from "react";
import "./Nutrition.css";

/* la function  permet de retourner le composant  avec le style */
function Glucides() {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src="../../assets/carbs-icon.png" alt="Logo glucides" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>290g</span>
                <p>Glucides</p>
                </div>
                
            </div>

        </div>
       
    );
}
export default Glucides;