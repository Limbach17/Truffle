import React, { Component } from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Header from "../components/Header";
import Container from "../components/Container";
import API from "../utils/API";
import "../map.css";

class Moderator extends Component {

    state = {
        plants: [],
        title: "Moderator view"
      };
    
      componentDidMount() {
        this.loadPlants();
      }

      loadPlants = () => {
        API.getGenus(this.state.selection)
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
                <Container />
            </div>
        );
    }
}

export default Moderator;