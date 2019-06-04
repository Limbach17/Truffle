import React from "react";
import "./style.css";

function Description () {
    return (
        <div id="bio-box">
            <p className="paragraph">Welcome to Truffle, the first, all-encompassing library of botanical images! Truffle supplements the work of 
                biologists, horticulturalists, landscape designers, students, and weekend garden warriors through a robust 
                library of verified, scientifically accurate, plant-related images.     
            </p>
            <p className="paragraph">No more scouring google for high-quality images of trees! No more embarrassing errors like mistakenly citing an 
                American beech leaf as a Chestnut leaf! This site returns botanical information from the Tropicos botanical database 
                along with wonderfully-rendered and expert-verified pictures and illustrations of plants and their characteristic features. </p>
        </div>
    );
}

export default Description;