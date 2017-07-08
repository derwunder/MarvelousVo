import React, { Component } from 'react';
import {connect} from 'react-redux';
//import NavMenu from '../components/navmenu/NavMenu';

import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Foot from '../components/Foot';
import {AppBar,
   Toolbar, ToolbarGroup,  ToolbarSeparator, TextField,
    IconButton} from 'material-ui';
import DrawerCO from '../components/Drawer/DrawerCO';

import {drawerOpen} from '../actions/Actions';

import HeadRoom from 'react-headroom';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false,
    searchValue:''};
  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  //handleToggle = () => this.setState({open: !this.state.open});
  render() {
    var {dispatch} =this.props;


    return (
      <div>
        <HeadRoom style={{zIndex:'101'}}>
        <AppBar
          title="Marvelous Vocabulary"
          iconElementLeft={<IconButton><NotificationsIcon /></IconButton>}
          onLeftIconButtonTouchTap={()=>{dispatch(drawerOpen());}}
        />
      </HeadRoom>
        { /*iconClassNameRight="muidocs-icon-navigation-expand-more"*/ }


        <DrawerCO/>
        {this.props.children}  {/*it will allow routes pages...*/}
        <div style={{height:50}}/>

      </div>
    );
  }
}
export default connect((state)=>{return state;})(MainPage);
