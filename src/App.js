import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';





class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        open: false
      };
      this.handleOpen= this.handleOpen.bind(this);
      this.handleClose= this.handleClose.bind(this);
      //this.handleTap = this.handleTap.bind(this);
    }


  handleOpen  () {
    this.setState({open: true});
  };

  handleClose  () {
    this.setState({open: false});
  };
handleToggle = () => this.setState({open: !this.state.open});

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
