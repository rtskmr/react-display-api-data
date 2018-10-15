import React, { Component } from 'react';
//import EmployeeDetails from './components/employeeDetails'
import SearchInput from './components/searchInput';
import Login from './components/login';
import EmployeeDetails from './components/employeeDetails';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <div>
      //       <div>
      //         <h1 className="App-title">React Display API data</h1>
      //       </div>
      //       <div className="searchSection">
      //         <SearchInput />
      //       </div>
      //     </div>
      //   </header>
      //   <p className="App-intro">
      //     <EmployeeDetails />
      //   </p>
      // </div>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/EmployeeDetails" component={EmployeeDetails} />
    </Switch> 
    );
  }
}

export default App;
