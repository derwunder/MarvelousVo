import React, { Component } from 'react';

//import '../css/home.css';
import WordItemList from '../components/WordBoxes/WordItemList';

class WordListAll extends Component {

  render() {
    return (
      <div>
        <WordItemList  type={2} />
      </div>
    );
  }
}
export default WordListAll;
