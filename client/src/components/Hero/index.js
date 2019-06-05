import React from "react";
import Flatlist from "../Flatlist";
import "../../map.css";
import "./style.css";

const Hero = (props) => {
   const {plants}=props;
   const {page}=props;
        {
              switch(page){
                  case "Home":
                     return <div id="hero"> <div>/</div> </div>;
                  case "List":
                     return <div id="hero"> <Flatlist plants={plants} /> </div>;
                  default:
                     return <div></div>;
               } 
            }

};
      
export default Hero;
  