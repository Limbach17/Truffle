import React, { Component } from "react";
// import Aside from "../components/Aside";
import ListHead from "../components/ListHead";
import API from "../utils/API";
import ListItems from "../components/ListItems";

class List extends Component {
    state = {
        plants: [],
      //   name: "",
      //   common: "",
        
      };
    
      componentDidMount() {
        this.loadPlants();
      }
    
      loadPlants = () => {
        console.log("Hi");
        API.getGenus("A")
          .then(res => {
            console.log(res);
            this.setState({ plants: res.data});
          }
          )
          .catch(err => console.log(err));
      };

    render () {
        return (
            <div className="page-display">
                <ListHead />
                <div id="list-content">
                    {/* <Aside /> */}
                    <ListItems plants={this.state.plants}/>
                </div>
            </div>
        );
    }
}

export default List;