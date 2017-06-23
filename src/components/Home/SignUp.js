import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {TextField,Toggle,Snackbar,Dialog} from 'material-ui';

import { teal600} from 'material-ui/styles/colors';

import {startLoginGoogle,startLoginGitHub, startLoginEmail, createAccount,loginStat} from '../../actions/Actions';
import {forgotUserPass} from '../../actions/ActUserBox';


class SignUp extends Component {
  constructor(props) {
   super(props);
    this.state = {
     expanded: false,
     newAccount: false,
     txEmail:'',txPass:'',
     loginStatActive:false,
     restorePass:false,
     dialogRePass:false,
     emailRePass:''
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

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={()=>{this.setState({dialogRePass:false});this.setState({emailRePass:''});}}
      />,
      <FlatButton
        label="Send"
        primary={true}
        keyboardFocused={true}
        onTouchTap={()=>{
          var {dispatch} = this.props;
          dispatch(forgotUserPass(this.state.emailRePass));
          this.setState({dialogRePass:false});
          this.setState({restorePass:true});
          this.setState({emailRePass:''});
        }}
      />,
    ];

    var {dispatch,regularReducer}=this.props;
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
        this.setState({loginStatActive:true});
        dispatch(createAccount(this.state.txEmail,this.state.txPass));
        } }
        label="Create Account"  style={{display:(this.state.newAccount?'inline-block':'none')}}/>
      <FlatButton onTouchTap={ () => {
        var {dispatch} = this.props;
        this.setState({loginStatActive:true});
        dispatch(startLoginEmail(this.state.txEmail,this.state.txPass));
        } }
        label="LogIn" style={{display:(!this.state.newAccount?'inline-block':'none')}} />
        <FlatButton onTouchTap={ () => {  this.setState({dialogRePass:true});} }
          label="Forgot" style={{display:(!this.state.newAccount?'inline-block':'none')}} />
    </CardActions>
  </Card>

  <Dialog contentStyle={{width:'95%',maxWidth:350,transform: 'translate(0px, 5px)',minHeight:140}}
          bodyStyle={{minHeight:140}}
          style={{minHeight:140,paddingTop:0}}
        repositionOnUpdate={true}
        autoDetectWindowHeight={false}
        title="Restore Password By Email"
        actions={actions}
        modal={false}
        open={this.state.dialogRePass}
      >
    <TextField style={{margin:5,width:'80%'}}
      hintText="Email"  floatingLabelText="Send to this Email" type="email"
      value={this.state.emailRePass}
      onChange={(e)=>{ this.setState({emailRePass: e.target.value});}} />
    </Dialog>

  <Snackbar style={{position:'fixed',bottom:20 }}
      open={(!regularReducer.loginStat && this.state.loginStatActive)}
      message={"SignIn Fail"}
      action="close"
      onActionTouchTap={()=>{dispatch(loginStat(true));
        this.setState({loginStatActive:false});
      }}/>
      <Snackbar style={{position:'fixed',bottom:20 }}
          open={this.state.restorePass}
          message={"Email send to restore password"}
          action="close"
          onActionTouchTap={()=>{dispatch(loginStat(true));
            this.setState({restorePass:false});
          }}/>
      </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)(SignUp);
