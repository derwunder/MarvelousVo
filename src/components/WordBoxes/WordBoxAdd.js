import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FloatingActionButton, Dialog,FlatButton} from 'material-ui';
import {TextField, Toggle} from 'material-ui';

import {createWordBox} from '../../actions/ActWordBox';

class WordBoxAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {open:false,
      boxName:'',
      favorite:false,
      fBoard:false,
      gBoard:false
    };
    this.handleChangeFav=this.handleChangeFav.bind(this);
    this.handleSave=this.handleSave.bind(this);
  }

  handleOpen = () => {
      this.setState({open: !this.state.open});
    };

    handleChangeFav  () {
      this.setState({favorite: !this.state.favorite});
    }
    handleChangeFB = () => {
      this.setState({fBoard: !this.state.fBoard});
    }
    handleChangeGB = () => {
      this.setState({gBoard: !this.state.gBoard});
    }
    handleSave  () {
      var {dispatch} = this.props;
      var newItem ={
      boxName:this.state.boxName,
      favorite:this.state.favorite,
      fBoard:this.state.fBoard,
      gBoard:this.state.gBoard
    };
    dispatch(createWordBox(newItem));
    this.setState({open: !this.state.open});
    }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleOpen}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSave}
      />,
    ];

    return (
      <div style={{height:75}}>
        <FloatingActionButton onTouchTap={this.handleOpen} style={{position:'fixed',bottom:10,right:10,zIndex:2}}>
          <i className="material-icons md-24 md-light " aria-hidden="true">add</i>
    </FloatingActionButton>

    <Dialog contentStyle={{width:'95%',maxWidth:350}}
          title="New Word Box"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleOpen}
        >
      <TextField style={{margin:5}}
        hintText="Box Name"  floatingLabelText="Box Name"
        id="box_name"
        onChange={(e)=>{ this.setState({boxName: e.target.value});}} />
      <Toggle style={{maxWidth:300,marginTop:15}}
        onToggle={this.handleChangeFav}
        label={<span >
          <i style={{marginRight:5,marginLeft:5}}
            className={this.state.favorite?"material-icons md-20 md-dark md-active":"material-icons md-20 md-dark"}
             aria-hidden="true">favorite</i>Favorite
          </span>}
      labelPosition="left" />
      <Toggle style={{maxWidth:300,marginTop:15}}
        onToggle={this.handleChangeFB}
      label={<span >
        <i style={{marginRight:5,marginLeft:5}}
          className={this.state.fBoard?"material-icons md-20 md-dark md-active":"material-icons md-20 md-dark"}
          aria-hidden="true">supervisor_account</i>Friend Board
      </span>}
      labelPosition="left" />
      <Toggle style={{maxWidth:300,marginTop:15}}
        onToggle={this.handleChangeGB}
      label={<span >
        <i style={{marginRight:5,marginLeft:5}}
          className={this.state.gBoard?"material-icons md-20 md-dark md-active":"material-icons md-20 md-dark"}
          aria-hidden="true">language</i>Global Board
      </span>}
      labelPosition="left" />

    </Dialog>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBoxAdd);
