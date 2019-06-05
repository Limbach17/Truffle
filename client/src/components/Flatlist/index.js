import React from "react";
import "../../map.css";
import "./style.css";

const Flatlist = ({plants, href}) => (
   
        <div id="list-items">
            <ul>
                {plants.map(plant => (
                  <li key={plant._id}>
                        <a href={href}>
                          <span>{plant.scientific_name}</span> -
                          <span>{plant.common_names}</span>
                        </a>
                  </li>
                ))}
              </ul>

        </div>
      )
      
export default Flatlist;
  