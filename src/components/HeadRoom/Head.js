import React, { Component } from 'react';
import {connect} from 'react-redux';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {AppBar,
   Toolbar, ToolbarGroup,  ToolbarSeparator, TextField,
    IconButton} from 'material-ui';


import {drawerOpen,filterWordBoxesSearch} from '../../actions/Actions';

import HeadRoom from 'react-headroom';
//import '../css/home.css';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


import FilterWB from './FilterWB';
import SortWB from './SortWB';


class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false,
    searchValue:''};
  }

  focusInput = (component)=> {
          if (component) {
              React.findDOMNode(component).focus();
          }
      };

  componentDidUpdate() {
    if (this.state.open) {
    //  this.refs.composer.focus()
      this.nameInput.focus();
    }
  }

  render() {
    var {dispatch, regularReducer} =this.props;
    return (
        <HeadRoom style={{zIndex:'101'}}>
        <AppBar
          title={this.props.title}
          iconElementLeft={<IconButton><MenuIcon /></IconButton>}
          onLeftIconButtonTouchTap={()=>{dispatch(drawerOpen());}}
        >
          <Toolbar style={{marginTop:'5px',backgroundColor:'transparent',paddingLeft:24,paddingRight:0}}>
            <ToolbarGroup firstChild={true}>
            {/*}<ToolbarSeparator style={{backgroundColor:'#fff'}} />*/}
              <IconButton onTouchTap={()=>{ this.setState({open:!this.state.open}); }}
                 style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                <i style={{margin:'5px'}} className="material-icons md-light">search</i>
              </IconButton>

              <FilterWB/>
              <SortWB/>


            </ToolbarGroup>
          </Toolbar>

        </AppBar>

          <div style={{ display:this.state.open?'':'none',
            zIndex:'10000',position:'absolute',
            left:0,top:0, width:'100%',height:64,
            backgroundColor:'#FAFAFA'}}>
            <div style={{borderRadius:5,marginRight:10, marginLeft:10, marginTop:8,width:'100%-10px',backgroundColor:'#EEEEEE'}}>

              <IconButton  iconStyle={{marginTop:12}} style={{display:'inline-block',width:30,height:30,marginRight:0,padding:0,border:0}}>
                <i style={{margin:'5px'}} className="material-icons md-dark">search</i>
              </IconButton>

              <TextField style={{display:'inline-block', verticalAlign:'top', width:220}}
                hintText="Search" underlineStyle={{borderColor:'#EEEEEE'}} underlineFocusStyle={{borderColor:'#EEEEEE'}}
                ref={(input) => { this.nameInput = input; }}
                value={regularReducer.wbSearch}
                onChange={(e)=>dispatch(filterWordBoxesSearch(e.target.value))}
              />
              <IconButton  onTouchTap={()=>{this.setState({open:!this.state.open});
                                            dispatch(filterWordBoxesSearch(''));    }} 
              iconStyle={{marginTop:12}} style={{position:'absolute',right:10,display:'inline-block',width:30,height:30,marginRight:0,padding:0,border:0}}>
                <i style={{margin:'5px'}} className="material-icons md-dark">cancel</i>
              </IconButton>
            </div>
            </div>


      </HeadRoom>
    );
  }
}
export default connect((state)=>{return state;}) (Head);