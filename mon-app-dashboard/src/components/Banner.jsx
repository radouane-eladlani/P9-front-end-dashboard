import React from "react";
import "./Banner.css";

/* la function Banner permet de retourner le composant Banner avec le style */
function Banner() {
    return (
        <div className="width">
            <div className="banner">
                <div className="flexBox">
                    <img src={require("../assets/icon_1.png")} alt=" icon zen" />
                    <img src={require("../assets/icon_2.png")} alt=" icon plonger" />
                    <img src={require("../assets/icon_3.png")} alt=" icon vélo" />
                    <img src={require("../assets/icon_4.png")} alt=" icon musculation" />
                </div>
                <div>
                                    <p> Copiryght, SportSee 2020</p>

                </div>

            </div>
        </div>
    );
}
export default Banner;