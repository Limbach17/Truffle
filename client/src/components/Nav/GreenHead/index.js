import React from "react";
import TitleBox from "../TitleBox";
import Selector from "../Selector";
import "../../../map.css";
import "./style.css";

function GreenHead(props) {
    return (
        <div id="green-head">
            <TitleBox />
            <Selector setSelection={props.setSelection}/>
        </div>
    );
}

export default GreenHead;