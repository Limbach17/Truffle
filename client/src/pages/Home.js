import React, { Component } from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Header from "../components/Header";
import API from "../utils/API";

class Home extends Component {

    state = {
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
            </div>
        );
    }
}

export default Home;