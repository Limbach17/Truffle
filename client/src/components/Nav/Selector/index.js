import React from "react";
import Search from "../Search"
import Index from "../Index/index";
import "../../../map.css";
import "./style.css";

function Selector (props) {
    return (
        <div id="selector">
            <Search />
            <Index setSelection={props.setSelection}/>
        </div>
    );
}

export default Selector;