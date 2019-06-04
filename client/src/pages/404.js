import React, { Component } from "react";
import Nav from "../components/Nav";

class Err404 extends Component {
    render () {
        return (
            <div>
                <Nav />
                <h1>404 Page Not Found</h1>
                <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                        🙄
                </span>
                </h1>
            </div>
        );
    }
}

export default Err404;


