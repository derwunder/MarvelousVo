import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import '../css/wordbox.css';
import WordBox from '../components/WordBoxes/WordBox';
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';


import Head from '../components/HeadRoom/Head';
import WordBoxListGlobal from '../components/WordBoxesGlobal/WordBoxListGlobal';
//import WordBoxList from '../components/WordBoxes/WordBoxList';


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

class GlobalBoard extends Component {
  constructor(props) {
   super(props);
   this.state = {
     slideIndex: 0,
   };
 }

 handleChange = (value) => {
   this.setState({
     slideIndex: value,
   });
 };
  render() {
    return (
      <div>
        <Head title={"Global Board"} section={3}/>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          >
          <Tab label="World Boxes" value={0} />
          <Tab label="My Posts" value={1} />
          </Tabs>
          <SwipeableViews
           index={this.state.slideIndex}
           onChangeIndex={this.handleChange}
          >
           <div>

              <WordBoxListGlobal type={1}/>

           </div>
           <div>
            <WordBoxListGlobal type={2}/>
           </div>
          </SwipeableViews>
      </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)  (GlobalBoard);
