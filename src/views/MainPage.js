import React, { Component } from 'react';
import {connect} from 'react-redux';
//import NavMenu from '../components/navmenu/NavMenu';
import Foot from '../components/Foot';
import {AppBar, RaisedButton ,FlatButton, Dialog} from 'material-ui';
import DrawerCO from '../components/Drawer/DrawerCO';

import {drawerOpen} from '../actions/Actions';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  //handleToggle = () => this.setState({open: !this.state.open});
  render() {
    var {dispatch} =this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <AppBar
          title="Marvelous Vocabulary"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={()=>{dispatch(drawerOpen());}}
        />
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
       <Dialog
         title="Dialog With Actions"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
       >
         The actions in this window were passed in as an array of React objects.
       </Dialog>
        <DrawerCO/>
        {this.props.children}  {/*it will allow routes pages...*/}
        <Foot/>
      </div>
    );
  }
}
export default connect((state)=>{return state;})(MainPage);
