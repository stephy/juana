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

  // TODO: requires major refactoring 
  // Lots of components can be created here
  render() {
    return (
      <div className="container-fluid">
        <div className="hero is-info">
          <div className="hero-body">
            <h1 className="title is-size-1">Rent Roll</h1>
            <h2 className="subtitle is-size-5">February 2018</h2>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              {this.state.units.map(unit => (
                <div className="box">
                  <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64 is-rounded">
                          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                        </figure>
                      </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>#{unit.unit}</strong>
                        <small> rent: ${unit.rent}</small>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                      </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a className="level-item">
                          <span className="icon is-small"><i className="fas fa-edit"></i></span>
                        </a>
                      </div>
                    </nav>
                  </div>
                  </article>
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