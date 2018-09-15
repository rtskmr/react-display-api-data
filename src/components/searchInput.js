
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { displayEmployeeDetailsAction } from '../actions/displayEmployeeDetailsAction';
import { connect } from 'react-redux';

import '../css/employeeDetails.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentWillMount(){
  this.props.displayEmployeeDetailsAction();
}
  render() {
    return (
      <div className="mainPage">
      <div className="input-group searchSection">
        <input type="text" className="form-control" placeholder="Search" id="txtSearch"/>
        <div className="input-group-btn">
          <button className="btn btn-primary" type="submit">
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </div>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  displayEmployeeDetails: state.displayEmployeeDetailsReducer.displayEmployeeDetails,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ displayEmployeeDetailsAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
