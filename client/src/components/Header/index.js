import React from "react";
import "../../map.css";
import "./style.css";

function Header (props) {
    return (
        <div id="header">
            <h3>{props.header}<span className="selection">{props.selection}</span></h3>

        </div>
    );
}

export default Header;