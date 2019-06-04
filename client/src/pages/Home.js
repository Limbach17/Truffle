import React, { Component } from "react";
import HomeHead from "../components/HomeHead";
import Container from "../components/Container";
import "./style.css";

class Home extends Component {
    render () {
        return (
            <div className="page-display">
                <HomeHead />
                <Container />
            </div>
        );
    }
}

export default Home;