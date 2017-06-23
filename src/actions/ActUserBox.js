import {ref,stgRef,auth} from '../firebase/constants';
import moment from 'moment';


export var updateUserData = (userData)=>{
  return{
    type:'USERDATA_CHANGE',
    userData
  };
};


export var forgotUserPass =(emailAtSignUp)=>{
  return (dispatch,getState)=>{
    var userAuth = auth;
    var email=emailAtSignUp

    userAuth.sendPasswordResetEmail(email).then(function() {
        console.log("Email send"); // Email sent.
    }, function(error) {
      console.log("Email fail send"); // An error happened.
    });
  };
};
export var changeUserPass =()=>{
  return (dispatch,getState)=>{
    var userAuth = auth;
    var email=getState().authReducer.email;

    userAuth.sendPasswordResetEmail(email).then(function() {
        console.log("Email send"); // Email sent.
    }, function(error) {
      console.log("Email fail send"); // An error happened.
    });
  };
};
export var updateUserDataSer = (userData) =>{
  return (dispatch,getState)=>{

    var user = auth.currentUser;

    user.updateProfile(userData).then(function() {
          dispatch(updateUserData(userData));
          console.log("user update"); // Update successful.
        }, function(error) {
          console.log("Error with user update"); // An error happened.
        });
  }
};
export var startImageProfileUP = (img) =>{
  return (dispatch, getState)=>{
    console.log(img);
    console.log((img.type).substring(6));
    var uploadTask = stgRef.child(`users/${getState().authReducer.uid}/proPic`).put(img);
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // See below for more detail
    }, function(error) {//HANDLE ERROR
    }, function() { //HANDLE SUCCESS
      var downloadURL = uploadTask.snapshot.downloadURL;
      //dispatch(updateUserData({photoURL:downloadURL}));
      var user = auth.currentUser;
      user.updateProfile({
            photoURL: downloadURL
          }).then(function() {
            dispatch(updateUserData({photoURL:downloadURL}));
            console.log("photo update"); // Update successful.
          }, function(error) {
            console.log("Error with photo update"); // An error happened.
          });
      });
  };
};
