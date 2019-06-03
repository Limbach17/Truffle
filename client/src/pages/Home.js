import React, { Component } from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import "./style.css";

class Home extends Component {
    render () {
        return (
            <div className="page-display">
                <Header />
                <Container />
            </div>
        );
    }
}

export default Home;