
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginAction';
// import Grid from '@material-ui/core/Grid';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import FormControl from '@material-ui/core/FormControl';
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';

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
      <div className="login-form">
        <form method="post">
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input type="text" placeholder="Enter Username" name="uname" value={this.state.username} onChange={this.handleChange('username')} required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Enter Password" name="psw" value={this.state.password} onChange={this.handleChange('password')} required />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
          </div>
          <div className="clearfix">
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </div>     
        </form>
        <p className="text-center"><a href="#">Create an Account</a></p>
      </div>

      //   <div>
      //   <div className="login-form">
      //     <form method="post">
      //       <h2 className="text-center">Log in</h2>
      //       <div className="form-group">
      //         <input type="text" className="form-control" placeholder="Username" required="required">
      //     </div>
      //         <div className="form-group">
      //           <input type="password" className="form-control" placeholder="Password" required="required">
      //     </div>
      //           <div className="form-group">
      //             <button type="submit" className="btn btn-primary btn-block">Log in</button>
      //           </div>
      //           <div className="clearfix">
      //             <label className="pull-left checkbox-inline"><input type="checkbox"> Remember me </label>
      //               <a href="#" className="pull-right">Forgot Password?</a>
      //     </div>        
      // </form>
      //           <p className="text-center"><a href="#">Create an Account</a></p>
      //         </div>        
      //         </div>        

    );
  }
}
const mapStateToProps = (state) => ({
  //loginDetails: state.displayEmployeeDetailsReducer.loginDetails,
  loginDetails: state.loginReducer.loginDetails,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ loginAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
