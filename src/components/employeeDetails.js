
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { displayEmployeeDetailsAction } from '../actions/displayEmployeeDetailsAction';
import { connect } from 'react-redux';

import '../css/todo.css';

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: ''
    };
  }
componentWillMount(){
  this.props.displayEmployeeDetailsAction();
}
  render() {
    const data = this.props.displayEmployeeDetails || [];
    let dataList = [];
    data.map((item,index) => {
      dataList.push(<tr key={`employeeList-${index}`}>
        <td>{item.id}</td>
        <td>{item.employee_name}</td>
        <td>{item.employee_salary}</td>
        <td>{item.employee_age}</td>
        <td>{item.profile_image}</td>
    </tr>)
    })
    debugger;
    return (
      <div className="mainPage">
        List of Data
        <div className="addedListSection"></div>
        <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Employee Salary</th>
                <th>Employee Age</th>
                <th>Profile Image</th>
            </tr>
        </thead>
        <tbody>
          {dataList}
        </tbody>
    </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  displayEmployeeDetails: state.displayEmployeeDetailsReducer.displayEmployeeDetails,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ displayEmployeeDetailsAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);
