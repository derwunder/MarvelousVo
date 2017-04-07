
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

/*export var startLoginGitHub = ()=>{
  return (dispatch, getState)=>{
      return firebase.auth().signInWithPopup(githubProvider)
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
