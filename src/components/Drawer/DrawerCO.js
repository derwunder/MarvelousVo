import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Drawer,Avatar,Badge} from 'material-ui';
import {List, ListItem, Subheader, Divider} from 'material-ui';
import {Link} from 'react-router';

//import ActionHome from 'material-ui/svg-icons/action/home';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
import ActionViewModule from 'material-ui/svg-icons/action/view-module';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionDashBoard from 'material-ui/svg-icons/action/dashboard';
import ActionFriendBoard from 'material-ui/svg-icons/action/supervisor-account';
import ImageViewComfy from 'material-ui/svg-icons/image/view-comfy';
import ComContacts from 'material-ui/svg-icons/communication/contacts';
import ActionLang from 'material-ui/svg-icons/action/language';
import ActionExitApp from 'material-ui/svg-icons/action/exit-to-app';
import Notifications from 'material-ui/svg-icons/social/notifications';
import {white} from 'material-ui/styles/colors';

import {drawerOpen,logoutFB} from '../../actions/Actions';

class DrawerCO extends Component {

  render() {
    var {dispatch,regularReducer,authReducer} = this.props;

    return (
      <div>
        <Drawer docked={false} //some
          open={regularReducer.drawerOpen}
          onRequestChange={(open) => dispatch(drawerOpen()) }>
          <List style={{background:"#004D40"}}>
            <Link style={{textDecoration:'none'}} to="/Profile" onClick={()=>dispatch(drawerOpen())}>
              <ListItem primaryText={authReducer.displayName}
                secondaryText={<p style={{color: "#fff"}}>{authReducer.email}</p>}  style={{ color:'#fff'}}
                leftAvatar={<Avatar size={50} src={authReducer.photoURL} />} />
            </Link>
            <ListItem primaryText="Notifications" style={{ color:'#fff'}} leftIcon={<Notifications color={white}/>} rightIcon={<Badge badgeContent={4} secondary={true} badgeStyle={{top: 2, right: 2}}/>} />
          </List>
          <List>
            <Subheader>Start</Subheader>
            <Link style={{textDecoration:'none'}} to="/WordBoxes" onClick={()=>dispatch(drawerOpen())}>
              <ListItem primaryText="Word Boxes" leftIcon={<ActionViewModule/>} />
            </Link>
            <Link style={{textDecoration:'none'}} to="/AllWords" onClick={()=>dispatch(drawerOpen())}>
              <ListItem primaryText="All Words" leftIcon={<ActionViewList/>} />
            </Link>
            <Link style={{textDecoration:'none'}} to="/MyLearning" onClick={()=>dispatch(drawerOpen())}>
              <ListItem primaryText="My Learning" leftIcon={<ActionAssignment/>} />
            </Link>
            <Divider/>
            <Subheader>Contacts</Subheader>
            <Link style={{textDecoration:'none'}} to="/FriendBoard" onClick={()=>dispatch(drawerOpen())}>
              <ListItem primaryText="Friend Board" leftIcon={<ActionFriendBoard/>} />
            </Link>
            <Link style={{textDecoration:'none'}} to="/FriendList" onClick={()=>dispatch(drawerOpen())}>
              <ListItem primaryText="Friend List" leftIcon={<ComContacts/>} />
            </Link>
            <Divider/>
            <Subheader>World</Subheader>
            <Link style={{textDecoration:'none'}} to="/GlobalBoard" onClick={()=>dispatch(drawerOpen())}>
              <ListItem primaryText="Global Board" leftIcon={<ActionLang/>} />
            </Link>
            <Divider/>
            <Subheader>Session</Subheader>
            <Link style={{textDecoration:'none'}} to="/" onClick={()=>dispatch(logoutFB())}>
              <ListItem primaryText="Logout" leftIcon={<ActionExitApp/>} />
            </Link>
          </List>
        </Drawer>
      </div>
    );
  }
}
export default connect((state)=>{return state;})(DrawerCO);
