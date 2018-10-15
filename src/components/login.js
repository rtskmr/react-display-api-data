
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginAction';
import find from 'lodash/find';
import '../css/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  // login = () => {
  //   this.props.history.push('/EmployeeDetails');
  // }

  login = () => {
    const loginList = this.props.loginDetails;
    if (loginList) {
      const isUserExits = find(loginList, item => {
        return (
          item.login === this.state.username &&
          item.password === this.state.password
        );
      });
      if (isUserExits) {
        //this.setState({ isValidLogin: true });
        this.props.history.push('/EmployeeDetails');
      } else {
        //this.setState({ isValidLogin: false });
      }
    }
  };
  componentWillMount = () => {
    debugger;
    this.props.loginAction();
  }
  render() {
    return (
      <div className="loginSection">
        <div className="container">
      <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" value={this.state.username} onChange={this.handleChange('username')} required />
          <label for="psw"><b>Password</b></label>
          <input type="password" value={this.state.password} onChange={this.handleChange('password')} placeholder="Enter Password" name="psw" required />
          <button type="submit" onClick={this.login}>Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  //loginDetails: state.displayEmployeeDetailsReducer.loginDetails,
  loginDetails: state.loginReducer.loginDetails,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ loginAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
