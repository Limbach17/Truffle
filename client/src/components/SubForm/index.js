import React, { Component } from "react";
import API from "../../utils/API";
import "../../map.css";
import "./style.css";

class SubForm extends Component {
  state = {
    route_name: "",
    genus: "",
    species: "",
    common_names: [],
    tropicos_id: null

  };

  handleInputChange = event => {
    
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.addPlant(
      {
      route_name: this.state.route_name,
      common_names: this.state.route_name,
      scientific_name: this.state.genus + " " + this.state.species,
      genus: this.state.genus,
      species: this.state.species,
      tropicos_name_id: this.state.tropicos_id
    }
    )
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
      
    this.setState({
      route_name: "",
      genus: "",
      species: "",
      common_names: [],
      tropicos_id: null  
    });
  };

  render() {
    return (
      <div>
        <h3>Enter a new plant</h3>
        <h4>
          *Inidcates a required field {this.state.firstName} {this.state.lastName}
        </h4>
        <form className="expanded-form">
            <h4>Enter a simple router name*</h4>
            <input className="expanded-input"
                value={this.state.route_name}
                name="route_name"
                onChange={this.handleInputChange}
                type="text"
                placeholder="red_maple"
            />

            <h4>Enter the genus name beginning with a capital letter*</h4>
            <input className="expanded-input"
                value={this.state.genus}
                name="genus"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Acer"
            />

            <h4>Enter the species name (all lowercase)*</h4>
            <input className="expanded-input"
                value={this.state.species}
                name="species"
                onChange={this.handleInputChange}
                type="text"
                placeholder="rubrum"
            />
            
            <h4>Enter common names separated by a comma*</h4>
            <input className="expanded-input"
                value={this.state.common_names}
                name="common_names"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Red maple, Swamp maple, Soft maple"
            />

            <h4>Enter the ID# from the Tropicos database*</h4>
            <input className="expanded-input"
                value={this.state.tropicos_id}
                name="tropicos_id"
                onChange={this.handleInputChange}
                type="integer"
                placeholder="200014"
            />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SubForm;
