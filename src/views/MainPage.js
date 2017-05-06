import React, { Component } from 'react';
import {connect} from 'react-redux';
//import NavMenu from '../components/navmenu/NavMenu';

import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Foot from '../components/Foot';
import {AppBar,
   Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator,
   DropDownMenu, MenuItem, FontIcon, TextField,
   RaisedButton ,FlatButton, Dialog, IconButton} from 'material-ui';
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
        >
          <Toolbar style={{marginTop:'5px',backgroundColor:'transparent'}}>
            <ToolbarGroup firstChild={true}>
            <ToolbarSeparator style={{backgroundColor:'#fff'}} />
            <i style={{margin:'5px'}} className="material-icons md-light">search</i>
            <TextField style={{maxWidth:120}}
              hintText="Hint Text"
              hintStyle={{color:'rgba(255, 255, 255, 0.6)'}}
              inputStyle={{color:'#fff'}}
              id="text-search"
              onChange={this.handleChange}
            />
            </ToolbarGroup>
          </Toolbar>

        </AppBar>
      </HeadRoom>
        { /*iconClassNameRight="muidocs-icon-navigation-expand-more"*/ }


        <DrawerCO/>
        {this.props.children}  {/*it will allow routes pages...*/}
        <Foot/>

      </div>
    );
  }
}
export default connect((state)=>{return state;})(MainPage);
