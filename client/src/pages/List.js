import React, { Component } from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Header from "../components/Header";
import Flatlist from "../components/Flatlist";
import API from "../utils/API";
import "../map.css";

class List extends Component {

    state = {
        plants: [],
        title: "Results",
        selection: this.props.match.params.letter
      };
    
      componentDidMount() {
        this.loadPlants();
      }

      loadPlants = () => {
        console.log("Hi");
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
                <Header 
                  selection={this.state.selection}
                  />
                <Flatlist 
                  plants={this.state.plants}
                  href={"/profile/" + this.state.plants.id}/>
            </div>
        );
    }
}

export default List;