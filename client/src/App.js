import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Plant from "./pages/Plant";
import Moderator from "./pages/Moderator";
import Err404 from "./pages/404";
import Err503 from "./pages/503";

function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/list/:letter" component={List} />
            <Route exact path="/profile/:id" component={Plant} />
            <Route exact path="/moderator" component={Moderator} />
            <Route exact path="/503" component={Err503} />
            <Route exact path="*" component={Err404} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
