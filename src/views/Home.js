import React, { Component } from 'react';

import WordBoxList from '../components/WordBoxes/WordBoxList';
import SignUp from '../components/Home/SignUp';
import Descr from '../components/Home/Descr';
import HowTo from '../components/Home/HowTo';

import '../css/home.css';
class Home extends Component {
  render() {
    return (
      <div>
        <SignUp/>
        <Descr/>
        <HowTo/>
        <WordBoxList/>
      </div>
    );
  }
}
export default Home;
