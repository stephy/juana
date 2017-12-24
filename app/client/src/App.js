import React, { Component } from "react"  ;
import axios from "axios";

class App extends Component {

  state = {
    "units": null
  };

  componentDidMount() {
  
    axios.get('/api/units')
      .then(res => console.log(res.data))
      // .then(res => this.setState("units": res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Welcome to juana!</h1>
          <h2 className="subtitle">An opensource property management platform built with the MERN stack</h2>
        </header>
      </div>
    );
  }
}

export default App;
