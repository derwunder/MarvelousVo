import React, { Component } from 'react';
import {connect} from 'react-redux';


//import '../css/home.css';
//import '../css/wordbox.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {FlatButton,RaisedButton,TextField,Avatar,Divider,Toggle} from 'material-ui';

import {startImageProfileUP,updateUserDataSer,getUserEnableFReq,userEnableFReq} from '../../actions/ActUserBox';

import Dropzone from 'react-dropzone';

import WordBoxStats from './WordBoxStats';
import PasswordChange from './PasswordChange';

class UserBox extends Component {
  constructor(props) {
   super(props);
   this.state = {
     editor: false,
     txUsername:'',
     friendReq:this.props.friendReq
     //oldPhotoURL: authReducer.photoURL,
     //photoChanged:false
   };

  }
  componentWillReceiveProps(nextProps){
    if(nextProps.friendReq !== this.props.friendReq   ) {
      this.setState({friendReq: nextProps.friendReq });
    }
  }
  componentDidMount(){
  /*  var {dispatch,regularReducer}=this.props;
    dispatch(getUserEnableFReq());
    console.log(regularReducer.userDataSearchable);*/
  }
  handleFriendReq = ()=>{
    var {dispatch,authReducer}=this.props;
    var userDataSearchable={
      userName:(authReducer.displayName).toLowerCase(),
      userPhoto:authReducer.photoURL,
      userEmail:authReducer.email
    };
    dispatch(userEnableFReq(userDataSearchable));
  }
  handleSave = () =>{
    var {dispatch}=this.props;
    if(this.state.txUsername!==''){
    dispatch(updateUserDataSer({displayName:this.state.txUsername}));}
    setTimeout( ()=>{this.setState({editor:!this.state.editor})}, 500);
  };
  handleEditor = ()=>{
    setTimeout( ()=>{this.setState({editor:!this.state.editor})}, 500);
  };
  /*handleEditorCancel = () =>{
    if(this.state.photoChanged){
      var {dispatch}=this.props;
      dispatch(updateUserDataSer({photoURL:this.state.oldPhotoURL}))
    }
    this.setState({photoChanged:!this.state.photoChanged});
    setTimeout( ()=>{this.setState({editor:!this.state.editor})}, 500);
  };*/
  render() {
    var {dispatch,authReducer,regularReducer}=this.props;
    var wb =this.props.wordBoxesReducer;

    var cWords=0, cWoBook=0, cWbG=0,cWbF=0, cWbFav=0;
    if(wb.length>0){
       wb.forEach((item)=>{
         if(item.gBoard)cWbG++;
         if(item.fBoard)cWbF++;
         if(item.favorite)cWbFav++;
         if(item.hasOwnProperty('words')){
          cWords+= (item.words).length;
          (item.words).forEach(wd=>{
            if(wd.bookmark) cWoBook++;
          });
        }
      });
    }

    var auxPic="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FScreenshot_20170302-203202.png?alt=media&token=3c589ec6-cab6-43ec-b4b4-38d502d8c079";
    return (
      <div>
        <div style={{textAlign:'center',margin:'auto',display:'block'}}>
        <Card style={{textAlign:'justify',minWidth:310,maxWidth:700,width:'55%',margin:5,display:'inline-flex'}}>
          <CardHeader textStyle={{padding:0}} style={{display:!this.state.editor?'':'none',paddingBottom:0}}
            avatar={ <Avatar src={authReducer.photoURL} size={60} />}
            title={authReducer.displayName}
            subtitle={<div><span>{authReducer.email}</span>
              {authReducer.provider==='google.com'?
                <i style={{margin:'5px'}}
                  className="fa fa-google material-icons md-20 md-dark md-active"></i>:
               authReducer.provider==='password'?
               <i style={{margin:'5px'}}
                 className="fa fa-envelope material-icons md-20 md-dark md-active"></i>:<div/>
              }

            </div>}

          >
            <Toggle labelStyle={{color:'rgba(0, 0, 0, 0.54)',fontSize:14}}
              label="Friend Request Allowed"
              defaultToggled={regularReducer.userDataSearchable}
              onToggle={this.handleFriendReq}
            />
          </CardHeader>
          <CardTitle style={{display:this.state.editor?'block':'none',paddingBottom:0}} title="Editor Mode" subtitle="Is Enable" />
          <TextField style={{display:this.state.editor?'block':'none', marginLeft:16,marginBottom:10,width:'60%'}}
            hintText={"Prev: "+authReducer.displayName}
            floatingLabelText="New Username"
            value={this.state.txUsername}
            onChange={(e)=>{this.setState({txUsername:e.target.value});}}
          />
          <Dropzone
            style={{
              display:this.state.editor?'':'none',
              textAlign:'center',
              borderRadius: 4,
              borderColor: 'rgba(67, 137, 94, 1)',
              borderStyle: 'dotted'}}
            multiple={false}
            accept={'image/*'}
            maxSize={2 * 1024 * 1024}
            onDrop={(acceptedFiles, rejectedFiles)=>{
            //  if(acceptedFiles.length>0){this.setState({photoChanged:!this.state.photoChanged});}
              dispatch(startImageProfileUP(acceptedFiles[0]));
            }}>
              <CardMedia
              //  overlay={<CardTitle title="Profile Pic" subtitle="Click or Drag & Drop" />}
              >
            <img alt="Click or Drop Img"
              style={{borderRadius: 4,margin:5,width:'97%',minWidth:'',minHeight:'', maxWidth:300}}
            src={authReducer.photoURL}/>
            </CardMedia>
          </Dropzone>


          <CardActions>
            <RaisedButton label="Edit" onTouchTap={this.handleEditor} style={{display:!this.state.editor?'flex':'none'}}/>
            <RaisedButton label="Cancel" onTouchTap={this.handleEditor} style={{display:this.state.editor?'inline-flex':'none'}}/>
            <RaisedButton  style={{display:this.state.editor?'inline-flex':'none'}}
              label="save"
              primary={true}
              onTouchTap={this.handleSave}
            />
          </CardActions>
          {authReducer.provider==='password' &&
          <PasswordChange />}

          <Divider inset={true} style={{marginTop:10,marginBottom:5, marginRight:72}}/>

          <WordBoxStats wb={this.props.wordBoxesReducer} editor={this.state.editor}/>
        </Card>
        </div>

        <div style={{height:70}}></div>
      </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)  (UserBox);
