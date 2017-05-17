import React, { Component } from 'react';

//import '../css/home.css';
import '../css/wordbox.css';
import WordBox from '../components/WordBoxes/WordBox';
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';


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

class FriendBoard extends Component {
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
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          >
          <Tab label="Words" value={0} />
          <Tab label="Idioms" value={1} />
          </Tabs>
          <SwipeableViews
           index={this.state.slideIndex}
           onChangeIndex={this.handleChange}
          >
           <div>
             <h2 style={styles.headline}>Tabs with slide effect</h2>
              Swipe to see the next slide.<br />
           </div>
           <div style={styles.slide}>
             <WordBox pic={true}/>
           </div>
          </SwipeableViews>
      </div>
    );
  }
}
export default FriendBoard;
