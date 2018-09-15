import React, { Component } from 'react';
import EmployeeDetails from './components/employeeDetails'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Display API data</h1>
        </header>
        <p className="App-intro">
        <EmployeeDetails />
        </p>
      </div>
    );
  }
}

export default App;
