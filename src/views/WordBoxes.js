import React, { Component } from 'react';

//import '../css/home.css';
import WordBoxList from '../components/WordBoxes/WordBoxList';
import WordBoxAdd from '../components/WordBoxes/WordBoxAdd';

class WordBoxes extends Component {
  render() {

    return (<div>
      <WordBoxList/>
      <WordBoxAdd/>
    </div>
    );
  }
}
export default WordBoxes;
