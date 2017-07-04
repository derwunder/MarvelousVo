import {ref,stgRef,auth} from '../firebase/constants';
import moment from 'moment';

/*********  FRIEND LIST ****************/
export var friendListChange = (friendList)=>{
  return{
    type:'FRIEND_LIST_CHANGE',
    friendList
  };
};
export var friendList=()=>{   //For State: friendList[]
  return (dispatch,getState)=>{

    var uid=getState().authReducer.uid;
      var frlistRef = ref.child(`users/${uid}/friends`)
             .orderByChild("frName")

      return frlistRef.once('value').then((snapshotUser)=>{
              var frList = snapshotUser.val() || {};
              //console.log(Object.assign(fsearchUser));
              //var userLT =Object.assign(fsearch,fsearchUser);

              var parsedFrlist = [];
              Object.keys(frList).forEach((fid)=>{
                parsedFrlist.push({
                    id:fid,
                    ...frList[fid]
                });

              });
              console.log(parsedFrlist);
              dispatch(friendListChange(parsedFrlist));
      });
  };
};
/********** CONFIRM FRIEND REQUEST ************/
export var confirmFriendRequest=(fRqItem)=>{
  return (dispatch,getState)=>{
    var uid=getState().authReducer.uid;
    var fid=fRqItem.reqUid;

    var frData={
      frEmail:fRqItem.reqUEmail,
      frName:fRqItem.reqUName,
      frPhoto:fRqItem.reqUPhoto
    };
    var urData={
      frEmail:getState().authReducer.email,
      frName:getState().authReducer.displayName,
      frPhoto:getState().authReducer.photoURL
    };
    var friendWrite = {};
    friendWrite["users/"+uid+"/friends/"+fid] =  frData;
    friendWrite["users/"+fid+"/friends/"+uid] = urData;

    friendWrite["frequest/users/"+uid+"/requests/"+fid] = null;
    friendWrite["frequest/users/"+fid+"/requests/"+uid] = null;

    var newFriendReq=getState().regularReducer.friendReq;
    const indexOfToDelete = newFriendReq.findIndex(lt => {
        return lt.reqUid === fid
      });
    newFriendReq.splice(indexOfToDelete, 1);

    var fRequestRef;
      fRequestRef= ref.update(friendWrite)
        .then(()=> {
         dispatch(friendReqLTChange(newFriendReq));
          console.log("succes friend Added");
        });
  };
}
/********** DENIED FRIEND REQUEST ************/
export var friendReqLTChange = (friendReq)=>{
  return{
    type:'FRIEND_REQUEST',
    friendReq
  };
};
export var deniedFriendRequest=(fid)=>{
  return (dispatch,getState)=>{

    var uid=getState().authReducer.uid;
    var newFriendReq=getState().regularReducer.friendReq;
    const indexOfToDelete = newFriendReq.findIndex(lt => {
        return lt.reqUid === fid
      });
    newFriendReq.splice(indexOfToDelete, 1);

    var fRequestRef;
      fRequestRef= ref.child(`frequest/users/${uid}/requests/${fid}`).remove()
        .then(()=> {
          dispatch(friendReqLTChange(newFriendReq));
          console.log("succes frquest Remove");
            });
  };
};
/*******FRIEND REQUEST LIST ***********/
export var friendReqLT = (friendReq)=>{
  return{
    type:'FRIEND_REQUEST',
    friendReq
  };
};
export var friendReqList=()=>{
  return (dispatch,getState)=>{

    var uid=getState().authReducer.uid;
      var fReqRef = ref.child(`frequest/users/${uid}/requests`)
             .orderByChild("reqUTime")

      return fReqRef.once('value').then((snapshotUser)=>{
              var fReq = snapshotUser.val() || {};
              //console.log(Object.assign(fsearchUser));
              //var userLT =Object.assign(fsearch,fsearchUser);

              var parsedFReqLT = [];
              Object.keys(fReq).forEach((fid)=>{
                parsedFReqLT.push({
                    ...fReq[fid]
                });

              });
              console.log(parsedFReqLT);
              dispatch(friendReqLT(parsedFReqLT));
      });
  };
};
/*********SEARCH USERS & SEND FR REQUEST ******/
export var sendFriendRequest=(fid)=>{
  return (dispatch,getState)=>{

    var uid=getState().authReducer.uid;
    var request={
      reqUTime: moment().valueOf(),
      reqUName: getState().authReducer.displayName,
      reqUEmail: getState().authReducer.email,
      reqUPhoto: getState().authReducer.photoURL,
      reqUid: uid
    };

    var fRequestRef;
      fRequestRef= ref.child(`frequest/users/${fid}/requests/${uid}`).set(request)
        .then(()=> {

          console.log("succes frquest send");
            });
  };
};
export var userSearchLT = (userLT)=>{
  return{
    type:'USER_SEARCH',
    userLT
  };
};
export var searchUser=(searchUserTx)=>{
  return (dispatch,getState)=>{

    var fSearchRef = ref.child(`fsearch/users/`)
           .orderByChild("userEmail")
           .equalTo(searchUserTx);

     fSearchRef.once('value').then((snapshot)=>{
      var fsearch = snapshot.val() || {};

      var fSearchUserNameRef = ref.child(`fsearch/users/`)
             .orderByChild("userName")
             .equalTo(searchUserTx);

      return fSearchUserNameRef.once('value').then((snapshotUser)=>{
              var fsearchUser = snapshotUser.val() || {};
              console.log(Object.assign(fsearch,fsearchUser));
              var userLT =Object.assign(fsearch,fsearchUser);

              var parsedUserLT = [];
              Object.keys(userLT).forEach((uid)=>{
                parsedUserLT.push({
                    id: uid,
                    ...userLT[uid]
                });

              });
                dispatch(userSearchLT(parsedUserLT));
      });

    });


  };
};
/********** USER DATA FOR FRIEND REQUES********/
export var userDataSearchable = ()=>{
  return{
    type:'USERDATA_DATA_SEARCHABLE'
  };
};
export var userEnableFReq=(userDataSearchableItem)=>{
  return (dispatch,getState)=>{

    var fSearchRef;

    if(!getState().regularReducer.userDataSearchable){
      fSearchRef= ref.child(`fsearch/users/${getState().authReducer.uid}`).set(userDataSearchableItem)
        .then(()=> {
          dispatch(userDataSearchable());
          console.log("succes fsearch updt");
            });
    }
    else{
      fSearchRef= ref.child(`fsearch/users/${getState().authReducer.uid}`).remove()
      .then(()=> {
        dispatch(userDataSearchable());
        console.log("succes fsearch rm");
          });
    }

  };
};
export var getUserEnableFReq=()=>{
  return (dispatch,getState)=>{

    const enpass=getState().regularReducer.userDataSearchable;
    var fSearchRef = ref.child(`fsearch/users/${getState().authReducer.uid}`);

    return fSearchRef.once('value').then((snapshot)=>{
      var fsearch = snapshot.val() || {};
    //  console.log(fsearch);

      if(fsearch.hasOwnProperty('userEmail') && !enpass){
        dispatch(userDataSearchable());
      }

    });


  };
};
/**************EMAIL USER PASS RESTORE*******/
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
/*************USER DATA UPDATE **************/
export var updateUserData = (userData)=>{
  return{
    type:'USERDATA_CHANGE',
    userData
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
