import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import NoMatch from "./pages/NoMatch";
import WIP from "./pages/WIP";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/list" component={List} />
            <Route exact path="/not-found" component={WIP} />
            <Route exact path="*" component={NoMatch} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
