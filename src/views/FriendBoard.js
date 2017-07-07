import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
//import '../css/wordbox.css';
//import WordBox from '../components/WordBoxes/WordBox';
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Head from '../components/HeadRoom/Head';

import {sortGWordBoxesBy} from '../actions/Actions';
import {startDLFBWordBoxes,setGlobalWordBoxes} from '../actions/ActWordBox';
import WordBoxListGlobal from '../components/WordBoxesGlobal/WordBoxListGlobal';


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
   };


 }
 componentWillMount(){
   var {dispatch}=this.props;
     //dispatch(setGlobalWordBoxes([]));
     dispatch(sortGWordBoxesBy('fBoard'));
     dispatch(startDLFBWordBoxes());
 }




  render() {

    return (
      <div>
        <Head title={"Friend Board"} section={4}/>

              <WordBoxListGlobal type={2}/>

      </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)   (FriendBoard);
