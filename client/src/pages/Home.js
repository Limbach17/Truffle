import React, { Component } from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Container from "../components/Container";
import API from "../utils/API";

class Home extends Component {

    state = {
        page: this.Component,
        plants: [],
        title: "Art, Multimedia, and Scientific Drawings",
        subtitle: "From our image library"
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
                    subtitle={this.state.subtitle}
                    />
                <hr />
                <Container 
                  plants={this.state.plants}
                  page={this.state.page}/>
            </div>
        );
    }
}

export default Home;