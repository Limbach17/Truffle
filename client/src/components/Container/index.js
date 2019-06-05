import React from "react";
import Hero from "../Hero";
import Aside from "../Aside";
import "../../map.css";
import "./style.css";

const Container = (props) => (
   
        <div id="container">
            <Hero
              plants={props.plants}
              page={props.page}
            />
            <Aside />

        </div>
      )
      
export default Container;
  