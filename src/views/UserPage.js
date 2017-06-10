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
        
        <DrawerCO/>
        {this.props.children}
      </div>
    );
  }
}
export default connect((state)=>{return state;}) (UserPage);
