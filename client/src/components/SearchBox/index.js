import React from "react";
import {SearchText, SearchBtn} from "../BasicSearch";
import "./style.css";

function SearchBox () {
    return (
        <form id="basic-form">
            <SearchText 
                name="plant"
                placeholder="search for a specific plant"
                />
            <SearchBtn 
                />
        </form>
    );
}

export default SearchBox;