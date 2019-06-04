import React from "react";
import "./style.css";

function Shuffle () {
    return (
        <div id="shuffle">
            <h4>Do the Truffle Shuffle!</h4>
            <p className="small">Bored? Explore random plants.</p>
            <img src="https://truffle-shuffle.s3.us-east-2.amazonaws.com/Assets/img/truffle_shuffle.png" alt="truffle-shuffle" height="100px"/>

        </div>
    );
}

export default Shuffle;