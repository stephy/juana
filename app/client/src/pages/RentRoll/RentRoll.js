import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ReactTable from 'react-table'

class RentRoll extends Component {

/*
  state = {
    units: []
  }

  componentDidMount() {
    this.loadUnits();
  }

  loadUnits = () => {
    axios.get("api/units/all")
      .then(res =>
        // this.setState({ units: res.data })
        console.log(res.data)
      )
      .catch(err => console.log(err))
  };
*/

  render() {

    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]

    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
      }]

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
          <ReactTable
            data={data}
            columns={columns}
          />
        </div>
      </div>
    )
  }

}

export default RentRoll;