import React, { Component } from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Header from "../components/Header";
import API from "../utils/API";
import "../map.css";

class Plant extends Component {
    state = {
        plants: [],
        title: "Plant profile",
        name: ""
      };
    
      componentDidMount() {
        this.loadPlants();
      }

      loadPlants = () => {
        API.getOne(this.state.selection)
          .then(res => {
            console.log(res);
            this.setState({ plants: res.data});
          }
          )
          .catch(err => console.log(err));
      };

    render () {
        return (
            <div>
                <Nav />
                <Title 
                    title={this.state.title}
                    />
                <Header />
            </div>
        );
    }
}

export default Plant;