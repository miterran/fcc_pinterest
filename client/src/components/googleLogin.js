import React from 'react';
import axios from 'axios'
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { googleAuthLogin } from '../actions/loginAction';

class Login extends React.Component{
  responseGoogle (response) {
    if(response.profileObj){
      axios.post('/login-google', response.profileObj).then(function(response){
          this.props.googleAuthLogin(response.data)
      }.bind(this))
    }else{
      throw response
    }
  }
  render () {
    return (
      <div>
        <GoogleLogin
          clientId='99513598536-i64m5pijdvu1invfeu2290nla9r8hfna.apps.googleusercontent.com'
          tag='p'
          style={{all: 'inherit'}}
          buttonText="Login"
          onSuccess={this.responseGoogle.bind(this)}
          onFailure={this.responseGoogle.bind(this)}
        />
      </div>
    );
  }
}

export default connect(null, { googleAuthLogin })(Login);

