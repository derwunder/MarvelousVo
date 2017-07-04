import React, { Component } from 'react';
import {connect} from 'react-redux';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { IconMenu, MenuItem,
    IconButton} from 'material-ui';


import {sortWordBoxesBy,sortGWordBoxesBy} from '../../actions/Actions';
import {startDLGWordBoxes,startDLGWordBoxesByUser} from '../../actions/ActWordBox';

//import '../css/home.css';

class SortWBG extends Component {
  constructor(props) {
    super(props);
    var {regularReducer}=this.props;
    this.state = {
      valueSingle: (regularReducer.wbgSortBy==='wordbox/boxName')?'1':
                      (regularReducer.wbgSortBy==='downloadsCount')?'2':
                        (regularReducer.wbgSortBy==='likeCount')?'3':
                          (regularReducer.wbgSortBy==='wordbox/updatedAt')?'4':
                          (regularReducer.wbgSortBy==='myPost')?'5':''
    };

  }

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  };

  render() {
    var {dispatch,authReducer} =this.props;
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
        } value="1" primaryText="Worldboxes"
          onTouchTap={ ()=>{
            dispatch(sortGWordBoxesBy('wordbox/boxName'));
            dispatch(startDLGWordBoxes());
          } } />
          <MenuItem leftIcon={
            <IconButton  style={{marginRight:0,padding:0,border:0}}>
              <i style={{margin:'5px'}} className="material-icons md-dark md-24">file_download</i>
            </IconButton>
          } value="2" primaryText="Downloads"
            onTouchTap={ ()=>{
              dispatch(sortGWordBoxesBy('downloadsCount'));
              dispatch(startDLGWordBoxes());
            } }  />
        <MenuItem leftIcon={
          <IconButton  style={{marginRight:0,padding:0,border:0}}>
            <i style={{margin:'5px'}} className="material-icons md-dark md-24">thumb_up</i>
            </IconButton>
          } value="3" primaryText="Likes"
          onTouchTap={ ()=>{
            dispatch(sortGWordBoxesBy('likeCount'));
            dispatch(startDLGWordBoxes());
          } }  />
        <MenuItem leftIcon={
        <IconButton  style={{marginRight:0,padding:0,border:0}}>
          <i style={{margin:'5px'}} className="material-icons md-dark md-24">update</i>
        </IconButton>
      } value="4" primaryText="Updates"
        onTouchTap={ ()=>{
          dispatch(sortGWordBoxesBy('wordbox/updatedAt'));
          dispatch(startDLGWordBoxes());
        } }  />
        <MenuItem leftIcon={
        <IconButton  style={{marginRight:0,padding:0,border:0}}>
          <i style={{margin:'5px'}} className="material-icons md-dark md-24">face</i>
        </IconButton>
      } value="5" primaryText="Posts"
        onTouchTap={ ()=>{
          dispatch(sortGWordBoxesBy('myPost'));
          dispatch(startDLGWordBoxesByUser(authReducer.uid));
        } }  />
      </IconMenu>
    );
  }
}
export default connect((state)=>{return state;}) (SortWBG);
