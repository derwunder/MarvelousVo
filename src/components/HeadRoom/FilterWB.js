import React, { Component } from 'react';
import {connect} from 'react-redux';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { IconMenu, MenuItem,
    IconButton} from 'material-ui';


import {filterWordBoxesFavorite,filterWordBoxesGBoard} from '../../actions/Actions';

//import '../css/home.css';



class FilterWB extends Component {
  constructor(props) {
    super(props);
    var {regularReducer}=this.props;
    this.state = {
      valueMultiple: [
        regularReducer.wbFavorite?'1':'',
          regularReducer.wbGBoard?'2':''
      ]
    };
    this.handleChangeMultiple=this.handleChangeMultiple.bind(this);
  }

  handleChangeMultiple = (event, value) => {
      this.setState({
        valueMultiple: value,
      });
    };
    filterFavorite = () =>{
      var {dispatch} =this.props;
      dispatch(filterWordBoxesFavorite());
    };
    filterGBoard = () =>{
      var {dispatch} =this.props;
      dispatch(filterWordBoxesGBoard());
    };
  render() {
    return (
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
            <i style={{margin:'5px'}} className="material-icons md-dark md-24">favorite</i>
            </IconButton>
          } onTouchTap={ this.filterFavorite } value="1" primaryText="Favorite" />
          <MenuItem leftIcon={
          <IconButton  style={{marginRight:0,padding:0,border:0}}>
            <i style={{margin:'5px'}} className="material-icons md-dark md-24">language</i>
          </IconButton>
        } onTouchTap={ this.filterGBoard } value="2" primaryText="Global Post" />
      </IconMenu>
    );
  }
}
export default connect((state)=>{return state;}) (FilterWB);
