
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { onSearchAction } from '../actions/displayEmployeeDetailsAction';
import { connect } from 'react-redux';

import '../css/employeeDetails.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtSearch: ''
    };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    this.props.onSearchAction(event.target.value)
  };
  componentWillMount() {
    // this.props.displayEmployeeDetailsAction();
  }
  render() {
    return (
      <div className="mainPage">
        <div className="input-group searchSection">
          <input type="text" className="form-control" placeholder="Search" id="txtSearch" value={this.state.txtSearch}  onChange={this.handleChange('txtSearch')} />
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
  // displayEmployeeDetails: state.displayEmployeeDetailsReducer.displayEmployeeDetails,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ onSearchAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
