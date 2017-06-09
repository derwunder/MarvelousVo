import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FloatingActionButton, Dialog,FlatButton} from 'material-ui';
import {TextField, Toggle} from 'material-ui';
import {startWordItemDelete} from '../../actions/ActWordBox';
//import {createWordBox} from '../../actions/ActWordBox';

class WordItemDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleDelete=this.handleDelete.bind(this);
  }


    handleDelete  () {
      var {dispatch} = this.props;

    dispatch(startWordItemDelete(this.props.wordBoxId,this.props.item.id));
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
          title="Delete Word Term"
          actions={actions}
          modal={true}
          open={this.props.eraser}
        >
      <p>Are you sure that you want to delete the word term <strong>"{this.props.item.wordTerm}"?</strong></p>
      <p>This will affect all Global share , Friend share, and the content of the box.</p>
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
)(WordItemDelete);
