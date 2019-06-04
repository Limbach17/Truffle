import React from "react";
import Hero from "../Hero";
import Aside from "../Aside";
import "./style.css";

function Container () {
    return (
        <div id="container">
            <Hero />
            <Aside />

        </div>
    );
}

export default Container;