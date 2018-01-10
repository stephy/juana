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
      <div className="section">
        <div className="container">
          <h1 className="title">Rent roll for month of xxx</h1>
          <div className="columns">
            <div className="column is-one-third">
              {this.state.units.map(unit => (
                <div className="box">
                  #{unit.unit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default RentRoll;