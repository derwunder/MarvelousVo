import {auth, github,google} from '../firebase/constants';
//import firebase here to handle async task

export var drawerOpen = ()=>{
  return {
    type:'DRAWER_OPEN'
  }
};

export var login = (userData)=>{
  return{
    type:'LOGIN',
    userData
  };
};

export var startLoginGoogle = ()=>{
  return (dispatch, getState)=>{
      return auth.signInWithPopup(google)
        .then(
          function(result) {
            console.log('Login Worked: ', result);
          })
        .catch(
          function(error) {
            console.log('Login unable: ', error);
          }
      );
    };
};
export var startLoginGitHub = ()=>{
  return (dispatch, getState)=>{
      return auth.signInWithPopup(github)
        .then(
          function(result) {
            console.log('Login Worked: ', result);
          })
        .catch(
          function(error) {
            console.log('Login unable: ', error);
          }
      );
    };
};


export var startLoginEmail = (email, password)=>{
  return (dispatch, getState)=>{
      return auth.signInWithEmailAndPassword(email, password)
        .then(
          function(result) {
            console.log('Login Worked: ', result);
          })
        .catch(
          function(error) {
            console.log('Login unable: ', error);
          }
      );
    };
};
export var createAccount = (email, password)=>{
  return (dispatch, getState)=>{
      return auth.createUserWithEmailAndPassword(email, password)
        .then(
          function(result) {
            console.log('Create Worked: ', result);
          })
        .catch(
          function(error) {
            console.log('Create unable: ', error);
          }
      );
    };
};

/*
export var startLoginFace = ()=>{
  return (dispatch, getState)=>{
      return firebase.auth().signInWithPopup(faceBookProvider)
        .then(
          function(result) {
            console.log('Login Worked: ', result);
          })
        .catch(
          function(error) {
            console.log('Login unable: ', error);
          }
      );
    };
};*/

export var logout = ()=>{
  return{
    type:'LOGOUT',
  };
};

/*export var startLogout = ()=>{
  return (dispatch, getState)=>{
    return firebase.auth().signOut().then(
      ()=> {
        console.log('Logout Worked: ');
      }
    );
  };
};*/
