import React, { Component } from 'react';
import {connect} from 'react-redux';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { IconMenu, MenuItem,
    IconButton} from 'material-ui';


import {sortWordBoxesBy} from '../../actions/Actions';

//import '../css/home.css';

class SortWB extends Component {
  constructor(props) {
    super(props);
    var {regularReducer}=this.props;
    this.state = {
      valueSingle: (regularReducer.wbSortBy==='aZ')?'1':
                    (regularReducer.wbSortBy==='rV')?'2':
                      (regularReducer.wbSortBy==='rA')?'3':''
    };

  }

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  };

  render() {
    var {dispatch} =this.props;
    return (
      <IconMenu
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        iconButtonElement={
          <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
            <i style={{margin:'5px'}} className="material-icons md-light">sort</i>
          </IconButton>
        }
        onChange={this.handleChangeSingle}
        value={this.state.valueSingle}
      >
        <MenuItem leftIcon={
          <IconButton  style={{marginRight:0,padding:0,border:0}}>
            <i style={{margin:'5px'}} className="material-icons md-dark md-24">sort_by_alpha</i>
          </IconButton>
        } onTouchTap={ ()=>{dispatch(sortWordBoxesBy('aZ'))} } value="1" primaryText="Alphabetic" />
        <MenuItem leftIcon={
          <IconButton  style={{marginRight:0,padding:0,border:0}}>
            <i style={{margin:'5px'}} className="material-icons md-dark md-24">restore</i>
            </IconButton>
          } onTouchTap={ ()=>{dispatch(sortWordBoxesBy('rV'))} } value="2" primaryText="Last viewed" />
          <MenuItem leftIcon={
          <IconButton  style={{marginRight:0,padding:0,border:0}}>
            <i style={{margin:'5px'}} className="material-icons md-dark md-24">schedule</i>
          </IconButton>
        } onTouchTap={ ()=>{dispatch(sortWordBoxesBy('rA'))} } value="3" primaryText="Last added" />
      </IconMenu>
    );
  }
}
export default connect((state)=>{return state;}) (SortWB);
