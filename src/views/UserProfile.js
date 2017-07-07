import React, { Component } from 'react';
import {connect} from 'react-redux';
//import '../css/home.css';
import UserBox from '../components/Profile/UserBox';
import Head from '../components/HeadRoom/Head';

class UserProfile extends Component {
  render() {
    var{regularReducer}=this.props;
    return (<div>
      <Head title={"My Profile"} section={5}/>
      <UserBox friendReq={regularReducer.userDataSearchable}/>
    </div>
    );
  }
}
export default connect((state)=>{return state;}) (UserProfile);
