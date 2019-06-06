import React, { Component } from "react";
import Nav from "../components/Nav";
import Container from "../components/Container";

class Err404 extends Component {
    state = {
        page: "404"
    }
    render () {
        return (
            <div>
                <Nav />
                <Container 
                    page={this.state.page}
                />
            </div>
            
        );
    }
}

export default Err404;


