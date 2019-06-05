import React from "react";
import "../../map.css";
import "./style.css";

const Title = (props) => (
    <div id="title">
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
    </div>

);

export default Title;