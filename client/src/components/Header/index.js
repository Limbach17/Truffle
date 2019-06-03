import React from "react";
import HeadTop from "../HeadTop";
import HeadBottom from "../HeadBottom";
import "./style.css";

function Header () {
    return (
        <div id="header">
            <HeadTop />
            <hr />
            <HeadBottom />
        </div>
    );
}

export default Header;