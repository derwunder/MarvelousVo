import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {TextField,Toggle} from 'material-ui';

import { teal600, teal800} from 'material-ui/styles/colors';


class SignUp extends Component {
  constructor(props) {
   super(props);
    this.state = {
     expanded: false,
     newAccount: false
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

  render() {

    return (
      <div className="signin-box">
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{margin:10,maxWidth:280}}>
    <CardTitle title="Sign In" subtitle="Let's grow your vocabulary" />
    <CardText>
      <i style={{margin:'5px',cursor:'pointer'}} className="fa fa-google material-icons md-48 md-dark" aria-hidden="true"></i>
      <i style={{margin:'5px',cursor:'pointer'}} className="fa fa-facebook-official material-icons md-48 md-dark" aria-hidden="true"></i>
      <i style={{margin:'5px',cursor:'pointer'}} className="fa fa-github  material-icons md-48 md-dark" aria-hidden="true"></i>
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
        onChange={()=>{}} />
      <TextField style={{margin:5, maxWidth:100, display:(this.state.newAccount?'inline-block':'none')}}
        hintText="Last Name"  floatingLabelText="Last Name"
        id="su_last"
        onChange={()=>{}} />
      <TextField style={{margin:5, maxWidth:200}}
        hintText="eMail"  floatingLabelText="eMail"
        id="su_email"
        onChange={()=>{}} />
      <TextField style={{margin:5, maxWidth:200}}
        hintText="Password"  floatingLabelText="Password"
        id="su_password" type="password"
        onChange={()=>{}}  />
    </CardText>
    <CardActions expandable={true}>
      <FlatButton label="Create Account"  style={{display:(this.state.newAccount?'block':'none')}}/>
      <FlatButton label="LogIn" style={{display:(!this.state.newAccount?'block':'none')}} />
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
