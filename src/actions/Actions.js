import {auth, github,google} from '../firebase/constants';
//import firebase here to handle async task


export var filterWordItemsBookmark = ()=>{
  return {
    type:'FILTER_WORDITEMS_BOOKMARK'
  }
};
export var filterWordBoxesSearch = (wbSearch)=>{
  return {
    type:'FILTER_WORDBOXES_SEARCH',
    wbSearch
  }
};
export var filterWordBoxesFBoard = ()=>{
  return {
    type:'FILTER_WORDBOXES_FBOARD'
  }
};
export var filterWordBoxesGBoard = ()=>{
  return {
    type:'FILTER_WORDBOXES_GBOARD'
  }
};
export var filterWordBoxesFavorite = ()=>{
  return {
    type:'FILTER_WORDBOXES_FAVORITE'
  }
};
export var sortWordBoxesBy = (wbSortBy)=>{
  return {
    type:'SORT_WORDBOXES_BY',
    wbSortBy
  }
};

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
export var loginStat =(loginStat)=>{
  return{
      type:'LOGIN_STAT',
      loginStat
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
            dispatch(loginStat(true));
          })
        .catch(
          function(error) {
            console.log('Login unable: ', error);
            dispatch(loginStat(false));
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
            dispatch(loginStat(true));
          })
        .catch(
          function(error) {
            console.log('Create unable: ', error);
            dispatch(loginStat(false));
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

export var logoutFB = ()=>{
  return (dispatch,getState)=>{
   return  auth.signOut().then(function() {
      console.log("Log Out");  // Sign-out successful.
    }, function(error) {
     console.log("Error logout "+error);  // An error happened.
    });
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
