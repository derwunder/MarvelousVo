import React, { Component } from 'react';
import {connect} from 'react-redux';


//import '../css/home.css';
//import '../css/wordbox.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {FlatButton,RaisedButton,TextField,Avatar,Divider} from 'material-ui';

import {changeUserPass} from '../../actions/ActUserBox';



class PasswordChange extends Component {
  constructor(props) {
   super(props);
   var {authReducer}=this.props;
   this.state = {
     //oldPhotoURL: authReducer.photoURL,
     //photoChanged:false
   };

  }
  handleChangePass = () =>{
    var {dispatch}=this.props;
    dispatch(changeUserPass());

  };
  handleEditor = ()=>{
  };

  render() {
    var {dispatch,authReducer}=this.props;


    return (
      <div>

          <CardActions>
            <RaisedButton
              label="Reset Password" onTouchTap={this.handleChangePass}
               style={{display:!this.state.edPass?'inline-flex':'none',marginRight:10}}/>

          </CardActions>

      </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)  (PasswordChange);
