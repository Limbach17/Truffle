import React, {Component} from "react";
import { Link } from "react-router-dom";

import "./style.css";

const ListItems = ({plants}) => (
   
     
        <div id="list-items">
            <ul>
                {plants.map(plant => (
                  <li key={plant._id}>
                    <Link to={"/#" + plant._id}>
                      <strong>
                        {plant.scientific_name} | {plant.common_names}
                      </strong>
                    </Link>
                    
                  </li>
                ))}
              </ul>

        </div>
      )
    

  
  export default ListItems;
  