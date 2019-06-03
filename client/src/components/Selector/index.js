import React from "react";
import Search from "../Search";
import List from "../List";
import "./style.css";

function Selector () {
    return (
        <div id="selector">
            <Search />
            <hr />
            <List />
        </div>
    );
}

export default Selector;