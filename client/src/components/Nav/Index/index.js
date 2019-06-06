import React from "react";
import "../../../map.css";
import "./style.css";

function Index (props) {    

    let array = [];

    for (var i = 0; i < 26; i++) {
        array.push(<a className="index-link" key={i} value={String.fromCharCode(i + 65)} 
            href={"/list/genus/" + String.fromCharCode(i + 97)}
            onClick={props.setSelection}>{String.fromCharCode(i + 65)}</a>);
    }
    return (
        <div id="selectors">
            {array}
        </div>
    );
}

export default Index;

