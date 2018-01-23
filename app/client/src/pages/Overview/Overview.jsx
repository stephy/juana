import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Overview extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="hero is-info">
          <div className="hero-body">
            <h1 className="title is-size-1">Unit Overview</h1>
            <h2 className="subtitle is-size-5">View and update units</h2>
          </div>
        </div>
      </div>

    )
  }

}

export default Overview;