import React from "react";
import "../../map.css";
import "./style.css";

function IconGallery () {
    return (
        <div id="icon-array">
            <a href="/not-found" alt="facebook" target="blank">
                <img className="link-icon" src="https://truffle-shuffle.s3.us-east-2.amazonaws.com/Assets/Icons/facebook.svg" 
                    alt="facebook icon" />
                </a>

                <a href="/not-found" alt="instagram" target="blank">
                <img className="link-icon"src="https://truffle-shuffle.s3.us-east-2.amazonaws.com/Assets/Icons/instagram.svg" 
                    alt="instagram icon" />
                </a>

                <a href="/not-found" alt="linkedIn" target="blank">
                <img className="link-icon"src="https://truffle-shuffle.s3.us-east-2.amazonaws.com/Assets/Icons/linked_in.svg" 
                    alt="linkedIn icon" />
                </a>

                <a href="/not-found" alt="twitter" target="blank">
                <img className="link-icon"src="https://truffle-shuffle.s3.us-east-2.amazonaws.com/Assets/Icons/twitter.svg" 
                    alt="twitter icon" />
                </a>
        </div>
    );
}

export default IconGallery;



