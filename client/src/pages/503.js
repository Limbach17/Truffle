import React, { Component } from "react";
import Nav from "../components/Nav";
import Container from "../components/Container";

class Err503 extends Component {

    state = {
        page: "503"
      };

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

export default Err503;