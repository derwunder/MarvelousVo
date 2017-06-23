import React, { Component } from 'react';
import {connect} from 'react-redux';
//import '../css/home.css';
import UserBox from '../components/Profile/UserBox';
import Head from '../components/HeadRoom/Head';

class UserProfile extends Component {
  render() {

    return (<div>
      <Head title={"My Profile"} section={3}/>
      <UserBox/>
    </div>
    );
  }
}
export default UserProfile;
