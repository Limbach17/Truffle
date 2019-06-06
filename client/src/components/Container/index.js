import React from "react";
import Hero from "../Hero";
import Aside from "../Aside";
import "../../map.css";
import "./style.css";

const Container = (props) => {
  const {page} = props;
  const {plants} = props;
       {
          switch(page){
              case "home":
                 return (
                        <div id="container">
                          <Hero 
                            page={page}
                            />
                          <Aside />

                        </div>
                    );
              case "list":
                  return (
                        <div id="container">
                            <Hero 
                              page = {page}
                              plants = {plants}
                              />
                            <Aside />

                          </div>
                  );
              case "profile":
                return (
                      <div id="container">
                          
                      </div>
                 );
              case "moderator":
                return (
                      <div id="container">
                          <Hero 
                            page={page}
                            />
                        </div>
                 );
              case "503":
                return (
                    <div id="container">
                        <div>
                          <h2>Work in progress</h2>
                          <h2>This page is currently under construction. Please check back later...</h2>
                        </div>
                      </div>
                  );
              default:
                  return (
                     <div id="container">
                            <div>
                              <h2>404 Page Not Found</h2>
                              <h2>
                              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                                      🙄
                              </span>
                              </h2>
                            </div>
                          </div>
                  );
              } 
           
           }
};
     
export default Container;

