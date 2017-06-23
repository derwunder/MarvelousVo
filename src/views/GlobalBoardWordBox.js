import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import WordBoxGItem from '../components/WordBoxesGlobal/WordBoxGItem';
import Head from '../components/HeadRoom/Head';

class GlobalBoardWordBox extends Component {

   findName = (item)=> {
      return item.id === this.props.params.wordboxId;
      //dispatch(checkIfWordBoxExist(this.props.wordListN));
  };
  render() {
    var {gWordBoxesReducer}=this.props;
    return (
      <div>
        <Head title={gWordBoxesReducer.length>0 && (gWordBoxesReducer.find(this.findName)).wordbox.boxName} section={2}/>
      {/*<WordItemList wordListN={this.props.params.wordListN} type={1} />*/}
      <WordBoxGItem wordboxId={this.props.params.wordboxId}/>
      </div>
    );
  }
}
export default connect((state)=>{return state;}) (GlobalBoardWordBox);
