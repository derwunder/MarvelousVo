import React, { Component } from 'react';

import WordBoxList from '../components/WordBoxes/WordBoxList';
import SignUp from '../components/Home/SignUp';
import Descr from '../components/Home/Descr';

import '../css/home.css';
class Home extends Component {
  render() {
    return (
      <div>
        <SignUp/>
        <Descr/>
        <WordBoxList/>
      </div>
    );
  }
}
export default Home;
