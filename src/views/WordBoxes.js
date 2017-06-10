import React, { Component } from 'react';
import {connect} from 'react-redux';
//import '../css/home.css';
import WordBoxList from '../components/WordBoxes/WordBoxList';
import WordBoxAdd from '../components/WordBoxes/WordBoxAdd';
import Head from '../components/HeadRoom/Head';

class WordBoxes extends Component {
  render() {

    return (<div>
      <Head title={"Word Boxes"} />
      <WordBoxList type={1}/>
      <WordBoxAdd/>
    </div>
    );
  }
}
export default WordBoxes;
