import React from "react";
import "../../map.css";
import "./style.css";

function Header (props) {
    return (
        <div id="header">
            <h4>Browsing -<span>{props.selection}</span></h4>

        </div>
    );
}

export default Header;