import React from "react";
import "./Nutrition.css";

/* la function  permet de retourner le composant  avec le style */
function Calories() {
    return (
        <div className="bgroundNutrition">
            <div className="center">
                <img src={require("../../assets/calories-icon.png")} alt="logo calories" />
            </div>
            <div className="flexBoxNutrition">
                <div className="flexBoxSpan">
                    <span>1,930kCal</span>
                <p>Calories</p>
                </div>
                
            </div>

        </div>

    );
}
export default Calories;