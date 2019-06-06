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
        selection: this.props.match.params.selection
        
      };

      componentDidMount() {
        this.loadPlants();
      }

      // componentDidMount () {
      //   const { selection } = this.props.match.params;
    
      //   API.getGenus(selection.toUpperCase())
      //   .then(res => {
      //     console.log(res);
      //     this.setState({ plants: res.data,
      //                     selection: selection
      //                   });
      //     }
      //   )
      //   .catch(err => console.log(err));
      // }

      // UNSAFE_componentWillReceiveProps () {
      // const thisGuy =  this.awaitstate();
      // console.log(thisGuy);

      //   API.getGenus(thisGuy.toUpperCase())
      //   .then(res => {
      //     console.log(res);
      //     this.setState({ plants: res.data,
      //       });
      //   }
      //   )
      //   .catch(err => console.log(err));
      // }
      // awaitstate = async()=>{
      //   const selection = await this.props.match.params.selection;
      //   this.setState({selection: selection});
      //   return selection;
      // }
      // componentDidMount() {
      //   this.setLetter();
      //   // this.loadPlants();
        
      // }

      // componentDidUpdate() {
      //   // this.setLetter();
      //   // this.loadPlants();
      // }

      // setLetter = () => {
      //   // const selection = this.props.match.params.selection;
      //   this.setState((state) => {
      //     return {selection: this.props.match.params.selection}
      //   })
      //   // console.log(JSON.stringify(selection));
      // }

      loadPlants = () => {
        const {selection} = this.state;
        
        API.getGenus(selection)
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