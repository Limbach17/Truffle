import React from "react";
import "./style.css";

function SupportNav () {
    return (

        <ul id="links">
            <li>
                <a id="support-link" href="/not-found" target="blank">Advanced Search</a>
                <p id="grey">|</p>
            </li>

            <li>
                <a id="support-link" href="/not-found" target="blank">Support</a>
                <p id="grey">|</p>
            </li>

            <li>
                <a id="support-link" href="/not-found" target="blank"> About</a>
                <p id="grey">|</p>
            </li>

            <li>
                <a id="support-link" href="/not-found" target="blank">Login</a>
            </li>
        </ul>

    );
}

export default SupportNav;