import React, { Component } from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Header from "../components/Header";
import Container from "../components/Container";
import API from "../utils/API";
import "../map.css";

class List extends Component {

    state = {
        page: this.Component,
        plants: [],
        title: "Scientific Names by Genus",
        subtitle: "Results",
        header: "Browsing - ",
        selection: ""
      };
    
      componentDidMount() {
        this.loadPlants();
      }

      setSelection = (event) => {
          console.log(event.target.getAttribute("value"));
          const letter = event.target.getAttribute("value");
          console.log(letter);
          this.setState({selection: letter});
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
                <Nav setSelection={this.setSelection}/>
                <Title 
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                    />
                <hr />
                <Header 
                  header={this.state.header}
                  selection={this.state.selection}
                  />

                <Container 
                  plants={this.state.plants}
                  page={this.state.page}
                  />
                
            </div>
        );
    }
}

export default List;