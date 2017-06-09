import React, { Component } from 'react';
import {connect} from 'react-redux';
//import '../css/home.css';
import WordBoxList from '../components/WordBoxes/WordBoxList';
import WordBoxAdd from '../components/WordBoxes/WordBoxAdd';

class WordBoxes extends Component {
  render() {

    return (<div>
      <WordBoxList type={1}/>
      <WordBoxAdd/>
    </div>
    );
  }
}
export default WordBoxes;
