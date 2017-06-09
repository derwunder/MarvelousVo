import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FloatingActionButton, Dialog,FlatButton} from 'material-ui';
import {TextField, Toggle} from 'material-ui';
import {wordBoxEditorOpen,startWordBoxUpdate} from '../../actions/ActWordBox';
//import {createWordBox} from '../../actions/ActWordBox';

class WordBoxEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxName:this.props.item.boxName,
      favorite:this.props.item.favorite,
      fBoard:this.props.item.fBoard,
      gBoard:this.props.item.gBoard
    };
    this.handleChangeFav=this.handleChangeFav.bind(this);
    this.handleSave=this.handleSave.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.item.boxName !== this.props.item.boxName   ) {
      this.setState({boxName: nextProps.item.boxName });
    }
    if(nextProps.item.favorite !== this.props.item.favorite   ) {
      this.setState({favorite: nextProps.item.favorite });
    }
    if(nextProps.item.fBoard !== this.props.item.fBoard   ) {
      this.setState({fBoard: nextProps.item.fBoard });
    }
    if(nextProps.item.gBoard !== this.props.item.gBoard   ) {
      this.setState({gBoard: nextProps.item.gBoard });
    }

  }

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
      var itemUpdates ={
      boxName:this.state.boxName,
      favorite:this.state.favorite,
      fBoard:this.state.fBoard,
      gBoard:this.state.gBoard
    };
    dispatch(startWordBoxUpdate(this.props.item.id,itemUpdates));
    this.props.handleEditor(this.state.favorite,this.state.fBoard,this.state.gBoard);
    //this.props.updateState(this.state.favorite,this.state.fBoard,this.state.gBoard);
    }

  render() {
    var {dispatch,regularReducer} = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleEditor}
      />,
      <FlatButton
        label="Update"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSave}
      />,
    ];

    return (
      <div>

    <Dialog contentStyle={{width:'95%',maxWidth:350}}
          title="Word Box Editor"
          actions={actions}
          modal={false}
          open={this.props.editor}
          onRequestClose={this.props.handleEditor}
        >
      <TextField style={{margin:5}}
        hintText="Box Name"  floatingLabelText="Box Name"
        id="box_name" value={this.state.boxName}
        onChange={(e)=>{ this.setState({boxName: e.target.value});}} />
      <Toggle style={{maxWidth:300,marginTop:15}}
        onToggle={this.handleChangeFav} defaultToggled={this.props.item.favorite}
        label={<span >
          <i style={{marginRight:5,marginLeft:5}}
            className={this.state.favorite?"material-icons md-20 md-dark md-active":"material-icons md-20 md-dark"}
             aria-hidden="true">favorite</i>Favorite
          </span>}
      labelPosition="left" />
      <Toggle style={{maxWidth:300,marginTop:15}}
        onToggle={this.handleChangeFB} defaultToggled={this.props.item.fBoard}
      label={<span >
        <i style={{marginRight:5,marginLeft:5}}
          className={this.state.fBoard?"material-icons md-20 md-dark md-active":"material-icons md-20 md-dark"}
          aria-hidden="true">supervisor_account</i>Friend Board
      </span>}
      labelPosition="left" />
      <Toggle style={{maxWidth:300,marginTop:15}}
        onToggle={this.handleChangeGB} defaultToggled={this.props.item.gBoard}
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
)(WordBoxEdit);
