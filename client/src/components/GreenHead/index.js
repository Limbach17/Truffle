import React from "react";
import TitleBox from "../TitleBox";
import Selector from "../Selector";
import "../../map.css";
import "./style.css";

function GreenHead () {
    return (
        <div id="green-head">
            <TitleBox />
            <Selector />
        </div>
    );
}

export default GreenHead;