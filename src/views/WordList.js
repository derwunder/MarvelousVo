import React, { Component } from 'react';

//import '../css/home.css';
import WordItemList from '../components/WordBoxes/WordItemList';

class WordList extends Component {

  render() {
    return (
      <div>
        <WordItemList wordListN={this.props.params.wordListN} type={1} />
      </div>
    );
  }
}
export default WordList;
