import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class RentRoll extends Component {

  state = {
    units: []
  }

  componentDidMount() {
    this.loadUnits();
    console.log(this.state);
  }

  loadUnits = () => {
    axios.get("api/units/all")
      .then(res =>
        this.setState({ units: res.data })
      )
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <h1>There are {this.state.units.length} units.</h1>
        <ul>
          {this.state.units.map(unit => (
            <li>{unit.unit}</li>
          ))}
        </ul>
      </div>
    )
  }

}

export default RentRoll