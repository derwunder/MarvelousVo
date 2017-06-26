import React, { Component } from 'react';

//import '../css/home.css';
import FList from '../components/FriendBox/FList';
import Head from '../components/HeadRoom/Head';

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import SvgContacts from 'material-ui/svg-icons/communication/contacts';
import SvgPersonAdd from 'material-ui/svg-icons/social/person-add';
import FAdd from '../components/FriendBox/FAdd';
import FRequest from '../components/FriendBox/FRequest';

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

class FriendList extends Component {
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

    return (<div>
      <Head title={"Friend List"}/>
      <Tabs
        onChange={this.handleChange}
        value={this.state.slideIndex}
        >
        <Tab icon={<SvgContacts />} value={0} />
        <Tab icon={<SvgPersonAdd/>} value={1} />
        </Tabs>
        <SwipeableViews
         index={this.state.slideIndex}
         onChangeIndex={this.handleChange}
        >
         <div style={styles.slide}>
           <FList/>

         </div>
         <div style={styles.slide}>
           <FRequest/>
         </div>
        </SwipeableViews>
        <FAdd/>
    </div>
    );
  }
}
export default FriendList;
