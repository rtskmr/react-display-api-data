import React, { Component } from 'react';
import SearchInput from './components/searchInput';
import Login from './components/login';
import employeeContainer from './components/employeeContainer';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/EmployeeDetails" component={employeeContainer} />
    </Switch> 
    );
  }
}

export default App;
