import React, { Component } from 'react';

//import '../css/home.css';
import FList from '../components/FriendBox/FList';
import Head from '../components/HeadRoom/Head';

class FriendList extends Component {
  render() {

    return (<div>
      <Head title={"Friend List"}/>
      <FList/>
    </div>
    );
  }
}
export default FriendList;
