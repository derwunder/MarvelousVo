import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
//import '../css/wordbox.css';
import WordBox from '../components/WordBoxes/WordBox';

import Head from '../components/HeadRoom/Head';

import {startDLGWordBoxes} from '../actions/ActWordBox';
import DrawerCO from '../components/Drawer/DrawerCO';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class GlobalPage extends Component {
  constructor(props) {
   super(props);
   this.state = {
     slideIndex: 0,
   };
   var {dispatch}=this.props;
   dispatch(startDLGWordBoxes());
 }


  render() {
    return (
      <div>
        <DrawerCO/>
        {this.props.children}

      </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)  (GlobalPage);
