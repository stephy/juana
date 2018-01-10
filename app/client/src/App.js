import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Overview from "./pages/Overview";
import RentRoll from "./pages/RentRoll";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/rentroll" component={RentRoll} />
      </Switch>
    </div>
  </Router>

export default App;
