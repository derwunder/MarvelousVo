import React, { Component } from 'react';
import {connect} from 'react-redux';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { IconMenu, MenuItem, CircularProgress,
    IconButton} from 'material-ui';


//import '../css/home.css';



class W8GlobalMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <div>
        <CircularProgress size={40} thickness={5} />
      </div>
    );
  }
}
export default connect((state)=>{return state;}) (W8GlobalMore);
