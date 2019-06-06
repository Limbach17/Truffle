import React, { Component } from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Header from "../components/Header";
import Container from "../components/Container";
import API from "../utils/API";
import "../map.css";

class Moderator extends Component {

    state = {
        page: "moderator",
        plants: [],
        title: "Moderator view",
        option01: "Add an entry",
        option02: "Edit an existing item"
      };
    
      componentDidMount() {
        this.loadPlants();
      }

      loadPlants = () => {
        API.getAll()
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
                 <hr />
                <Container 
                  page={this.state.page}
                  option01={this.state.option01}
                  option02={this.state.option02}
                  />
            </div>
        );
    }
}

export default Moderator;