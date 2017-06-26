import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FloatingActionButton, Dialog,FlatButton, RaisedButton} from 'material-ui';
import {TextField, Toggle,List,ListItem,Avatar,IconButton,CardMedia} from 'material-ui';
import SvgPersonAdd from 'material-ui/svg-icons/social/person-add';
import {searchUser,sendFriendRequest} from '../../actions/ActUserBox';

class FAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {open:false,
      userSearchTx:'',
      diagPhoto:false,
      currentUserPhoto:''
    };
    this.handleSave=this.handleSave.bind(this);
  }
  handleDiagPhoto = ()=>{
    this.setState({diagPhoto:!this.state.diagPhoto});
  }
  handleOpen = () => {
      this.setState({open: !this.state.open});
    };


    handleSave  () {
      var {dispatch} = this.props;
      var newItem ={
      userSearchTx:this.state.boxName,
      favorite:this.state.favorite,
      fBoard:this.state.fBoard,
      gBoard:this.state.gBoard
    };
  //  dispatch(createWordBox(newItem));
  //  this.restoreState();
    this.setState({open: !this.state.open});
    }

  render() {

    const actions = [
      <FlatButton
        label="Done"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleOpen}
      />
    ];

    var mapUserSearch = (userLT)=>{
      return (
        userLT.map(usr=>{
          return (
            <ListItem key={usr.id} hoverColor={'#rgba(255, 255, 255, 0.1)'}
              primaryText={usr.userName}
              secondaryText	={usr.userEmail}
              leftAvatar={<Avatar src={usr.userPhoto} onClick={()=>{
                this.setState({currentUserPhoto:usr.userPhoto});
                this.handleDiagPhoto();

              }} />}
              rightIcon={<IconButton  style={{margin:0, padding:0,marginTop:10, width:30,height:30}} //<SvgPersonAdd/>
                onTouchTap={()=>{
                var {dispatch}=this.props;
                dispatch(sendFriendRequest(usr.id));
                this.setState({open: !this.state.open});
              }}>
                <i className="material-icons md-24 md-dark" >person_add</i>
               </IconButton>}
            />
          );
        })
      );
    };

    var {regularReducer}=this.props;

    return (
      <div style={{height:75}}>
        <FloatingActionButton onTouchTap={this.handleOpen} style={{position:'fixed',bottom:10,right:10,zIndex:2}}>
          <i className="material-icons md-24 md-light " aria-hidden="true">add</i>
    </FloatingActionButton>

    <Dialog contentStyle={{width:'95%',maxWidth:350,transform: 'translate(0px, 5px)',minHeight:140}}
            bodyStyle={{minHeight:140}}
            style={{minHeight:140,paddingTop:0}}
          repositionOnUpdate={true}
          autoDetectWindowHeight={false}
          autoScrollBodyContent={true}
          titleStyle={{color:'#555',paddingBottom:0}}
          title={<p>Friend Online Search <i style={{margin:'5px'}} className="material-icons md-24 md-dark">search</i></p>}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleOpen}
        >
      <TextField style={{margin:5, width:'60%'}}
        hintText="Email / Username"  floatingLabelText="Search"
        onChange={(e)=>{ this.setState({userSearchTx: e.target.value});}} />
        <RaisedButton style={{display:'inline-flex'}}
          label="Search"
          primary={true}
          keyboardFocused={true}
          onTouchTap={()=>{
            var {dispatch}=this.props;
            var tx=(this.state.userSearchTx).toLowerCase();
            dispatch(searchUser(tx));
          }}
        />
        <List>
        {mapUserSearch(regularReducer.userSearch)}
      </List>
    </Dialog>
    <Dialog contentStyle={{width:'95%',maxWidth:350,transform: 'translate(0px, 5px)',minHeight:140}}
            bodyStyle={{minHeight:140}}
            style={{minHeight:140,paddingTop:0}}
          repositionOnUpdate={true}
          autoDetectWindowHeight={false}
          titleStyle={{color:'#555',paddingBottom:0}}
          actions={<FlatButton
            label="Done"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleDiagPhoto}
          />}
          modal={false}
          open={this.state.diagPhoto}
          onRequestClose={this.handleDiagPhoto}
        >
          <CardMedia
            >
              <img  src={this.state.currentUserPhoto}
                //src="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FScreenshot_20170302-203202.png?alt=media&token=3c589ec6-cab6-43ec-b4b4-38d502d8c079"
                alt="" />
            </CardMedia>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(FAdd);
