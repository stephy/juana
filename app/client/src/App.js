import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import RentRoll from "./pages/RentRoll";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/rentroll" component={RentRoll} />
      </Switch>
    </div>
  </Router>

export default App;
