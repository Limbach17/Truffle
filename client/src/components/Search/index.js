import React from "react";
import SearchBox from "../SearchBox";
import "../../map.css";
import "./style.css";

function Search () {
    return (
        <div id="search-row">
            <p className="highlight">List scientific names by genius</p>
            <SearchBox />

        </div>
    );
}

export default Search;