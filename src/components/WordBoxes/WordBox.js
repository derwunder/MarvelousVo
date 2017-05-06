import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {Badge} from 'material-ui';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';

import { teal600, teal800, tealA700} from 'material-ui/styles/colors';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Checkbox,IconButton, TextField,Toggle, List , ListItem , Divider} from 'material-ui';

class WordBox extends Component {

  componentWillMount(){

  }
  render() {
    return (
      <div  className="h">
        <Card style={{width:150, margin:10}}>
            <CardMedia style={{borderRadius:5}}>
              <img style={{maxWidth:150,borderRadius:5}} src="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FhomeBox%2Fhoy549.jpg?alt=media&token=4bab98d9-1ec1-48b6-b6e2-02544cb8dbc0" />
            </CardMedia>
            <CardTitle style={{padding:10}} title="Card title" />
            <CardActions style={{textAlign:'right'}}>
              <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                 className="material-icons md-24 md-dark md-active" aria-hidden="true">bookmark</i>
               </IconButton>
                <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                   className="material-icons md-24 md-dark" aria-hidden="true">supervisor_account</i>
                 </IconButton>
                <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                   className="material-icons md-24 md-dark" aria-hidden="true">language</i>
                 </IconButton>
                <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                   className="material-icons md-24 md-dark" aria-hidden="true">more_vert</i>
                 </IconButton>
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
)(WordBox);
