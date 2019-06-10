import React, { Component } from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Container from "../components/Container";
import API from "../utils/API";
import "../map.css";
// import { runInThisContext } from "vm";

class Plant extends Component {
    state = {
        page: "profile",
        plant: [],
        title: "Plant profile",
        selection: this.props.match.params.selection
      };
    
      componentDidMount() {
        this.loadPlants();
      }

      loadPlants = () => {
        const {selection} = this.state;

        API.getOne(selection)
          .then(res => {
            console.log(res);
            this.setState({ plant: res.data});
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
                <Container 
                  page={this.state.page}
                  plant={this.state.plant}
                />
            </div>
        );
    }
}

export default Plant;