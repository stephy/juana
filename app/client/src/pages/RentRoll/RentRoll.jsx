import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import moment from "moment";

class RentRoll extends Component {


  state = {
    units: []
  }

  componentDidMount() {
    this.loadUnits();
    console.log(this.state)
  }

  loadUnits = () => {
    axios.get("api/units/all")
      .then(res =>
        this.setState({ units: res.data })
      )
      .catch(err => console.log(err))
  };


  render() {

    const columns = [
      {
        Header: 'Unit',
        accessor: 'unit',
        maxWidth: 60
      }, 
      {
        Header: 'Tenants',
        accessor: 'tenants'
      },
      {
        Header: 'Monthly Rent',
        accessor: 'rent'
      },
      {
        Header: 'Status',
        accessor: 'status'
      },
      {
        Header: 'Comments',
        accessor: 'comments'
      }
    ]

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
            data={this.state.units}
            columns={columns}
            showPagination={false}
            minRows={0}
            className="-striped -highlight"
          />
        </div>
      </div>
    )
  }

}

export default RentRoll;