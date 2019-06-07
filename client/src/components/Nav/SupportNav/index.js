import React from "react";
// import {Link} from "react-router-dom";
import "./style.css";
import "../../../map.css";

function SupportNav () {
    return (
        <ul id="support-links">
            <li className="support-list">
                <a id="support-link" href="/503">Advanced Search</a>
                <p className="link-space">|</p>
            </li>

            <li className="support-list">
                <a id="support-link" href="/503">Support</a>
                <p className="link-space">|</p>
            </li>

            <li className="support-list">
                <a id="support-link" href="/503"> About</a>
                <p className="link-space">|</p>
            </li>

            <li className="support-list">
                <a id="support-link" href="/moderator">Moderator</a>
            </li>
            
        </ul>

        

    );
}

export default SupportNav;




            // <Link to={'/503'}>Advanced Search</Link>