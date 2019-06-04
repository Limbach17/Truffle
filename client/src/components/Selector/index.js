import React from "react";
import Search from "../Search";
import Index from "../Index";
import "./style.css";

function Selector () {
    return (
        <div id="selector">
            <Search />
            <Index />
        </div>
    );
}

export default Selector;