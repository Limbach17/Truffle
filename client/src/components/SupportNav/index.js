import React from "react";
// import Link from "react";
import "./style.css";

function SupportNav () {
    return (
        <ul id="support-links">
            <li className="support-list">
                <a id="support-link" href="/not-found" target="blank">Advanced Search</a>
                <p className="link-space">|</p>
            </li>

            <li className="support-list">
                <a id="support-link" href="/not-found" target="blank">Support</a>
                <p className="link-space">|</p>
            </li>

            <li className="support-list">
                <a id="support-link" href="/not-found" target="blank"> About</a>
                <p className="link-space">|</p>
            </li>

            <li className="support-list">
                <a id="support-link" href="/not-found" target="blank">Login</a>
            </li>
        </ul>

    );
}

export default SupportNav;




            // <Link to={'/503'}>Advanced Search</Link>