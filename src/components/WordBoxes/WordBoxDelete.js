import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FloatingActionButton, Dialog,FlatButton} from 'material-ui';
import {TextField, Toggle} from 'material-ui';
import {startWordBoxDelete} from '../../actions/ActWordBox';
//import {createWordBox} from '../../actions/ActWordBox';

class WordBoxDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleDelete=this.handleDelete.bind(this);
  }


    handleDelete  () {
      var {dispatch} = this.props;
      var itemUpdates ={
      boxName:this.state.boxName,
      favorite:this.state.favorite,
      fBoard:this.state.fBoard,
      gBoard:this.state.gBoard
    };
    dispatch(startWordBoxDelete(this.props.item.id));
    //this.props.handleEditor(this.state.favorite,this.state.fBoard,this.state.gBoard);
    //this.props.updateState(this.state.favorite,this.state.fBoard,this.state.gBoard);
    this.props.handleEraser();
    }

  render() {
    var {dispatch,regularReducer} = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleEraser}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleDelete}
      />,
    ];

    return (
      <div>

    <Dialog contentStyle={{width:'95%',maxWidth:350}}
          title="Delete Word Box"
          actions={actions}
          modal={true}
          open={this.props.eraser}
        >
      <p>Are you sure that you want to delete the word box <strong>"{this.props.item.boxName}"?</strong></p>
      <p>This will erase all Global share , Friend share, and the content of the box.</p>
      <p>Once done, <strong>it cannot be undo.</strong></p>

    </Dialog>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBoxDelete);
