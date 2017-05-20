import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {TextField,Toggle} from 'material-ui';

import { teal600} from 'material-ui/styles/colors';

import {startLoginGoogle,startLoginGitHub, startLoginEmail, createAccount} from '../../actions/Actions';


class SignUp extends Component {
  constructor(props) {
   super(props);
    this.state = {
     expanded: false,
     newAccount: false,
     txName:'',txLast:'',
     txEmail:'',txPass:''
    };
  }
  handleExpandChange = (expanded) => {
  this.setState({expanded: expanded});
  };

  handleToggle = () => {
    this.setState({expanded: !this.state.expanded});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };
  handleSignIn = () => {
    this.setState({newAccount: !this.state.newAccount});
  };

  //Fuctions Social M
  onLoginGitH = () =>{
    var {dispatch} = this.props;
    dispatch(startLoginGitHub());
  };
  onLoginGoogle = () =>{
    var {dispatch} = this.props;
    dispatch(startLoginGoogle());
  };


  render() {

    return (
      <div className="signin-box">
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{margin:10,maxWidth:280}}>
    <CardTitle title="Sign In" subtitle="Let's grow your vocabulary" />
    <CardText>
      <i onClick={this.onLoginGoogle} style={{margin:'5px',cursor:'pointer'}} className="fa fa-google material-icons md-48 md-dark" aria-hidden="true"></i>
      <i style={{margin:'5px',cursor:'pointer'}} className="fa fa-facebook-official material-icons md-48 md-dark" aria-hidden="true"></i>
      <i onClick={this.onLoginGitH} style={{margin:'5px',cursor:'pointer'}} className="fa fa-github  material-icons md-48 md-dark" aria-hidden="true"></i>
      <i style={{margin:'5px',cursor:'pointer', color:this.state.expanded?teal600:''}} onClick={this.handleToggle} className="fa fa-envelope material-icons md-48 md-dark" aria-hidden="true"></i>

    </CardText>
    <CardText expandable={true}>
        <Toggle
        label="New Account"
        labelPosition="right"
        labelStyle={{color:'rgba(0, 0, 0, 0.541176)'}}
        toggled={this.state.newAccount}
        onToggle={this.handleSignIn}
      />
      <TextField style={{margin:5, maxWidth:100, display:(this.state.newAccount?'inline-block':'none')}}
        hintText="Name"  floatingLabelText="Name"
        id="su_name"
        onChange={(e)=>{this.setState({txName: e.target.value});}} />
      <TextField style={{margin:5, maxWidth:100, display:(this.state.newAccount?'inline-block':'none')}}
        hintText="Last Name"  floatingLabelText="Last Name"
        id="su_last"
        onChange={(e)=>{this.setState({txLast: e.target.value});}} />
      <TextField style={{margin:5, maxWidth:200}}
        hintText="eMail"  floatingLabelText="eMail"
        id="su_email"
        onChange={(e)=>{this.setState({txEmail: e.target.value});}} />
      <TextField style={{margin:5, maxWidth:200}}
        hintText="Password"  floatingLabelText="Password"
        id="su_password" type="password"
        onChange={(e)=>{this.setState({txPass: e.target.value});}}  />
    </CardText>
    <CardActions expandable={true}>
      <FlatButton onTouchTap={ () => {
        var {dispatch} = this.props;
        dispatch(createAccount(this.state.txEmail,this.state.txPass));
        } }
        label="Create Account"  style={{display:(this.state.newAccount?'block':'none')}}/>
      <FlatButton onTouchTap={ () => {
        var {dispatch} = this.props;
        dispatch(startLoginEmail(this.state.txEmail,this.state.txPass));
        } }
        label="LogIn" style={{display:(!this.state.newAccount?'block':'none')}} />
    </CardActions>
  </Card>
      </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)(SignUp);
