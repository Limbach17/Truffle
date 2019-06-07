import React from "react";
import SubForm from "../SubForm";
import "../../map.css";
import "./style.css";

const Hero = (props) => {
   const {plants}=props;
   const {page}=props;
   const {option01} = props;
   const {option02} = props;
        {
         switch(page){
            case "home":
               return (
                        <div className="hero-image">
                           <p className="hero-text">Texas Mountain Laurel (<span className="scientific-name">Sophora secundiflora
                              </span>)
                           </p>
                        </div>
                  );
            case "list":
                return (
                  <div className="item-list">
                     <ul>
                        {plants.map(plant => (
                           <li key={plant._id}>
                                 <a className="profile-link" href={"/profile/" + plant._id}>
                                 <span className="scientific-name">{plant.scientific_name}</span> -
                                 <span>{plant.common_names}</span>
                                 </a>
                           </li>
                        ))}
                    </ul>
      
              </div>
                );
            case "moderator":
                  // state = {
                  //    option: ""
                  //  }
              return (
                     <div className="hero">
                        <h3><button>{option01}</button> or <button>{option02}</button></h3>
                        <SubForm />
                     </div>
               );

            } 
            
         }
};
      
export default Hero;
  