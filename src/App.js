import React, { Component } from 'react';
import EmployeeDetails from './components/employeeDetails'
import SearchInput from './components/searchInput';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div>
              <h1 className="App-title">React Display API data</h1>
            </div>
            <div className="searchSection">
              <SearchInput />
            </div>
          </div>
        </header>
        <p className="App-intro">
          <EmployeeDetails />
        </p>
      </div>
    );
  }
}

export default App;
