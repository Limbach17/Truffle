import React, { Component } from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Header from "../components/Header";
import Container from "../components/Container";
import API from "../utils/API";
import "../map.css";

class List extends Component {

    state = {
        page: "list",
        plants: [],
        title: "Scientific Names by Genus",
        subtitle: "Results",
        header: "Browsing - ",
        selection: "A"
      };

      componentDidMount() {
        // const { letter} = this.props.match.params
    
        // fetch(`localhost:3000/list/genus/${letter}`)
        //   .then((selection) => {
        //     this.setState(() => ({ selection }))
        //   });
        this.loadPlants();
      }

      setSelection = (event) => {
        event.preventDefault()
        const letter=event.target.getAttribute("value");
        console.log(letter);
        this.setState({selection: letter});
    }

      loadPlants = () => {
        let letter = this.state.selection;
        API.getGenus(letter)
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