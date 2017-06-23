import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import WordItemList from '../components/WordBoxes/WordItemList';
import Head from '../components/HeadRoom/Head';

class WordList extends Component {

   findName = (item)=> {
      return item.id === this.props.params.wordListN;
  };
  render() {
    var {wordBoxesReducer}=this.props;
    return (
      <div>
        <Head title={wordBoxesReducer.length>0 && (wordBoxesReducer.find(this.findName)).boxName} section={2}/>
        <WordItemList wordListN={this.props.params.wordListN} type={1} />
      </div>
    );
  }
}
export default connect((state)=>{return state;}) (WordList);
