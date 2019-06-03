import React from "react";
import SearchBox from "../SearchBox";
import "./style.css";

function Search () {
    return (
        <div id="search-row">
            <p>List scientific names by genius</p>
            <SearchBox />

        </div>
    );
}

export default Search;