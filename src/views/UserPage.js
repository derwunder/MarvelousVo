import React, { Component } from 'react';
import {connect} from 'react-redux';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {AppBar,
   Toolbar, ToolbarGroup,  ToolbarSeparator, TextField,
    IconButton} from 'material-ui';
import DrawerCO from '../components/Drawer/DrawerCO';

import {drawerOpen} from '../actions/Actions';

import HeadRoom from 'react-headroom';
//import '../css/home.css';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false,
    searchValue:''};
    this.handleChangeMultiple=this.handleChangeMultiple.bind(this);
  }
  handleChangeMultiple = (event, value) => {
      this.setState({
        valueMultiple: value,
      });
    };
  render() {
    var {dispatch} =this.props;
    return (
      <div>
        <HeadRoom style={{zIndex:'101'}}>
        <AppBar
          title="Marvelous Vocabulary"
          iconElementLeft={<IconButton><MenuIcon /></IconButton>}
          onLeftIconButtonTouchTap={()=>{dispatch(drawerOpen());}}
        >
          <Toolbar style={{marginTop:'5px',backgroundColor:'transparent',paddingLeft:24,paddingRight:0}}>
            <ToolbarGroup firstChild={true}>
            {/*}<ToolbarSeparator style={{backgroundColor:'#fff'}} />*/}
              <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                <i style={{margin:'5px'}} className="material-icons md-light">search</i>
              </IconButton>

              <IconMenu
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                iconButtonElement={
                  <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                    <i style={{margin:'5px'}} className="material-icons md-light">filter_list</i>
                  </IconButton>
                }
                onChange={this.handleChangeMultiple}
                value={this.state.valueMultiple}
                multiple={true}
              >
                <MenuItem leftIcon={
                  <IconButton  style={{marginRight:0,padding:0,border:0}}>
                    <i style={{margin:'5px'}} className="material-icons md-dark md-24">restore</i>
                  </IconButton>
                } value="1" primaryText="Recently viewed" />
                <MenuItem leftIcon={
                  <IconButton  style={{marginRight:0,padding:0,border:0}}>
                    <i style={{margin:'5px'}} className="material-icons md-dark md-24">schedule</i>
                  </IconButton>
                } value="2" primaryText="Recently added" />
                <MenuItem leftIcon={
                  <IconButton  style={{marginRight:0,padding:0,border:0}}>
                    <i style={{margin:'5px'}} className="material-icons md-dark md-24">favorite</i>
                  </IconButton>
                } value="3" primaryText="Favorite" />
              </IconMenu>
              <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                <i style={{margin:'5px'}} className="material-icons md-light">view_stream</i>
              </IconButton>
            </ToolbarGroup>
          </Toolbar>

        </AppBar>
      </HeadRoom>
        <DrawerCO/>
        {this.props.children}
      </div>
    );
  }
}
export default connect((state)=>{return state;}) (UserPage);
