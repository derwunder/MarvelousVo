import React, { Component } from 'react';

//import '../css/home.css';
import WordItemList from '../components/WordBoxes/WordItemList';
import Head from '../components/HeadRoom/Head';

class WordListAll extends Component {

  render() {
    return (
      <div>
        <Head title={"All Words"} section={2}/>
        <WordItemList  type={2} />
      </div>
    );
  }
}
export default WordListAll;
