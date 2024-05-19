import React from "react";
import "./Nutrition.css";

/* la function  permet de retourner le composant  avec le style */
function Lipides() {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src="../../assets/fat-icon.png" alt="Logo lipides" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>50g</span>
                <p>Lipides</p>
                </div>
                
            </div>

        </div>
       
    );
}
export default Lipides;