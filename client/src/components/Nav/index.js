import React from "react";
import WhiteHead from "./WhiteHead"
import GreenHead from "./GreenHead";
import "../../map.css";
import "./style.css";

function Nav(props) {
  return (
    <div id="nav">
        <WhiteHead />
        <GreenHead setSelection={props.setSelection}/>
    </div>
  );
}

export default Nav;
