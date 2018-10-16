import React, { Component } from 'react';
import SearchInput from './searchInput';
import EmployeeDetails from './employeeDetails';
import './../App.css';
class employeeContainer extends Component {
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

export default employeeContainer;
