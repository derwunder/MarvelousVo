import {ref} from '../firebase/constants';
import moment from 'moment';
import {browserHistory} from 'react-router';

/*********GLOBAL WORD BOX REPLY*****************/
export var delReplyGlobalWordBox =(idWBG,idCm,idRe)=>{
  return{
    type:'DELETE_REPLY_GLOBAL_WORDBOX',
    idWBG,idCm,idRe
  };
};
export var deleteReplyGWB = (idWBG,idCm,idRe)=>{
  return (dispatch,getState)=>{
    var replyWBGItemRef = ref.child(`global/wordboxes/${idWBG}/comments/${idCm}/replys/${idRe}`);
    return replyWBGItemRef.remove().then(()=>{
      dispatch(delReplyGlobalWordBox(idWBG,idCm,idRe));
      console.log("Delete Reply Check FB");  //location.reload();  //dispatch(updateTodo(id,updates));
    });

  };
};
export var loReplyGlobalWordBox =(idWBG,idCm,newReply)=>{
  return{
    type:'ADD_REPLY_GLOBAL_WORDBOX',
    idWBG,
    idCm,
    newReply
  };
};
export var replyGlobalWordBox = (idWBG,idCm,newReply) =>{
  return (dispatch,getState)=>{
    var gWordBoxReplyRef = ref.child(`global/wordboxes/${idWBG}/comments/${idCm}/replys/`).push(newReply);

    return gWordBoxReplyRef.then(()=>{
      console.log("Check Reply on FB");
      dispatch(loReplyGlobalWordBox(idWBG,idCm,{
        id:gWordBoxReplyRef.key,
        ...newReply
      }));
    });
  };
};
/******** GLOBAL WORD BOX COMMENT ******/
export var delCommentGlobalWordBox =(idWBG,idCm)=>{
  return{
    type:'DELETE_COMMENT_GLOBAL_WORDBOX',
    idWBG,
    idCm,
  };
};
export var deleteCommentGWB = (idWBG,idCm)=>{
  return (dispatch,getState)=>{
    var commentWBGItemRef = ref.child(`global/wordboxes/${idWBG}/comments/${idCm}`);
    return commentWBGItemRef.remove().then(()=>{
      dispatch(delCommentGlobalWordBox(idWBG,idCm));
      console.log("Delete Comment Check FB");  //location.reload();  //dispatch(updateTodo(id,updates));
    });

  };
};
export var loCommentGlobalWordBox =(idWBG,newComment)=>{
  return{
    type:'ADD_COMMENT_GLOBAL_WORDBOX',
    idWBG,
    newComment
  };
};
export var commentGlobalWordBox = (idWBG,newComment) =>{
  return (dispatch,getState)=>{
    var gWordBoxCommentRef = ref.child(`global/wordboxes/${idWBG}/comments/`).push(newComment);

    return gWordBoxCommentRef.then(()=>{
      console.log("Check Comment on FB id ");

      dispatch(loCommentGlobalWordBox(idWBG,{
        id:gWordBoxCommentRef.key,
        ...newComment
      }));

    });
  };
};

/***************GLOBAL WORD BOX DOWNLOAD ******************/
export var dlGWordBox = (idWBG,uid,item)=>{
  return{
    type:'DOWNLOAD_GLOBAL_WORDBOX',
    idWBG,
    uid, item
  };
};
export var startDLGWordBox =(idWBG,newItemCloud,newItemLocal)=>{
  return (dispatch,getState)=>{

    var itemHelper ={
      ...newItemCloud,
      createdAt: moment().valueOf(),
      lastCheckedAt: moment().valueOf()
     };
    var wordBoxRef = ref
    .child(`users/${getState().authReducer.uid}/wordboxes/`).push(itemHelper);

    return wordBoxRef.then(()=>{
      dispatch(wordBoxAdd({
        id:wordBoxRef.key,
        createdAt: moment().valueOf(),
        lastCheckedAt: moment().valueOf(),
        ...newItemLocal
      }));
      var uid= getState().authReducer.uid;
      var gWB={}, dLCount=0, dLStatus=false;
      var gWB =getState().gWordBoxesReducer.find(wb=>wb.id===idWBG);
      if(gWB.hasOwnProperty('downloads')){
        dLCount=Object.keys(gWB.downloads).length;
        if((gWB.downloads).hasOwnProperty(uid)) dLStatus=true;
      }
      var itemLocal= {}; itemLocal[uid]=true;

      var gWordBoxLikeRef = ref.child(`global/wordboxes/${idWBG}`);
      var mergedUpdate = {};
      mergedUpdate["downloads/"+uid] =  true;
      if(dLStatus){
        mergedUpdate["downloadsCount"]=-1*(dLCount);
      }
      else{
        mergedUpdate["downloadsCount"]=-1*(dLCount+1);
      }
      gWordBoxLikeRef.update(mergedUpdate).then(()=>{
        dispatch(dlGWordBox(idWBG,uid,itemLocal))
      });
    });

  };
};

/******** GLOBAL WORD BOX LIKE ******/
export var likeWordBox = (idWBG,uid,item)=>{
  return{
    type:'LIKE_GLOBAL_WORDBOX',
    idWBG,
    uid, item
  };
};
export var dislikeWordBox = (idWBG,uid,item)=>{
  return{
    type:'DISLIKE_GLOBAL_WORDBOX',
    idWBG,
    uid, item
  };
};
export var deletelikeWordBox = (idWBG,uid)=>{
  return{
    type:'DELETE_LIKE_GLOBAL_WORDBOX',
    idWBG,
    uid
  };
};
export var startLikeWordBox =(idWBG,type)=>{
  return (dispatch,getState)=>{

    var uid= getState().authReducer.uid;
    var likeStatus=false, dislikeStatus=false;

    var gWB={},likeCount=0,dislikeCount=0;
    var gWB =getState().gWordBoxesReducer.find(wb=>wb.id===idWBG);

    if(gWB.hasOwnProperty('like')){
      likeCount = Object.keys(gWB.like).length;
      if((gWB.like).hasOwnProperty(uid)) likeStatus=true;
    }
    if(gWB.hasOwnProperty('dislike')){
      dislikeCount = Object.keys(gWB.dislike).length;
      if((gWB.dislike).hasOwnProperty(uid)) dislikeStatus=true;
    }

    var gWordBoxLikeRef = ref.child(`global/wordboxes/${idWBG}`);

    if(type==='like'){
      var mergedUpdate = {};
      mergedUpdate["like/"+uid] = likeStatus? null: true;
      mergedUpdate["dislike/"+uid] = null;
      if(likeStatus){
        mergedUpdate["likeCount"]=-1*(likeCount-1);
      }
      else{
        mergedUpdate["likeCount"]=-1*(likeCount+1);
        dislikeStatus?
          mergedUpdate["dislikeCount"]=-1*(dislikeCount-1):
          mergedUpdate["dislikeCount"]=-1*dislikeCount;
      }
      var itemLocal= {}; itemLocal[uid]=true;

    return  gWordBoxLikeRef.update(mergedUpdate).then(()=>{
      console.log("Global WB Like");
      likeStatus?
        dispatch(deletelikeWordBox(idWBG,uid)):
        dispatch(likeWordBox(idWBG,uid,itemLocal))
    });

    }else if(type==='dislike'){
      var mergedUpdate = {};
      mergedUpdate["like/"+uid] = null;
      mergedUpdate["dislike/"+uid] = dislikeStatus? null: true;
      if(dislikeStatus){
        mergedUpdate["dislikeCount"]=-1*(dislikeCount-1);
      }
      else{
        mergedUpdate["dislikeCount"]=-1*(dislikeCount+1);
        likeStatus?
          mergedUpdate["likeCount"]=-1*(likeCount-1):
          mergedUpdate["likeCount"]=-1*likeCount;
      }
      var itemLocal= {}; itemLocal[uid]=true;

      return gWordBoxLikeRef.update(mergedUpdate).then(()=>{
        console.log("Global WB disLike");
        dislikeStatus?
          dispatch(deletelikeWordBox(idWBG,uid)):
          dispatch(dislikeWordBox(idWBG,uid,itemLocal))
      });

    }

  //  var gWordBoxLikeRef = ref.child(`global/wordboxes/${idWBG}/like/${uid}`).set(true);

    return gWordBoxLikeRef


  };
};

/******** FRIEND BOARD DL WORD BOXES *****/
export var addMoreFGlobalWordBoxes=(gWordBoxes,inx)=>{
  return {
    type:'ADD_MORE_FGLOBAL_WORDBOXES',
    gWordBoxes,
    inx
  }
}
export var startDLFBWordBoxes = () =>{
  return (dispatch,getState)=>{

    //dispatch(globalW8Dialog());
    var fList =getState().regularReducer.friendList;
  //  dispatch(setGlobalWordBoxes([]));
  //  var numIGlobal=getState().regularReducer.numIGlobal;


      fList.forEach((fItem,inx)=>{
        console.log(fItem.id);
        var parsedGWordBoxes = [];
        var gWordBoxesRef = ref.child(`global/wordboxes`).orderByChild('wordbox/createBy')
              .equalTo(fItem.id);
         gWordBoxesRef.once('value').then((snapshot)=>{
           //redux expect to be an Array Object
          snapshot.forEach((inSnap) => {
           var gWB = inSnap.val();
             if(gWB.hasOwnProperty('wordbox')){
               gWB.wordbox.updatedAt= (-1* (gWB.wordbox.updatedAt)); //FB trick to order data Descending way
             if(gWB.hasOwnProperty('comments')){
               var parsedComments = [];
               Object.keys(gWB.comments).forEach(commentId=>{
                 if((gWB['comments'][commentId]).hasOwnProperty('replys')){
                   var parsedReplys = [];
                   Object.keys(gWB['comments'][commentId]['replys']).forEach(replyId=>{
                     parsedReplys.push({
                       id:replyId,
                       ...gWB['comments'][commentId]['replys'][replyId]
                     });
                   });
                     parsedComments.push({
                       id:commentId,
                       ...gWB['comments'][commentId],
                       replys:parsedReplys
                     });
                  }
                  else{
                     parsedComments.push({
                       id:commentId,
                       ...gWB['comments'][commentId]
                     });
                   }
                 });
                 parsedGWordBoxes.push({
                     id: inSnap.key,
                     ...gWB,
                     comments:parsedComments
                 });
               }
               else{
                 parsedGWordBoxes.push({
                     id: inSnap.key,
                     ...gWB
                 });
               }
             }
            });
            dispatch(addMoreFGlobalWordBoxes(parsedGWordBoxes,inx));
            //setTimeout( ()=>{dispatch(globalW8Dialog());}, 2000);
        });

      });
      //      dispatch(setGlobalWordBoxes(parsedGWordBoxes));


  };
};


/******** GLOBAL DL WORD BOXES ******/
          ///WAITING DIALOGS
export var globalW8Dialog = () =>{
  return {
    type:'GLOBAL_WAIT'
  }
};
export var globalW8MoreDialog = () =>{
  return {
    type:'GLOBAL_MORE_WAIT'
  }
};
          ///GLOBAL ITEMS NUMBER
export var globalItemsNumber=(numIGlobal)=>{
  return{
    type:'GLOBAL_ITEMS_NUM',
    numIGlobal
  }
};
export var setGlobalWordBoxes = (gWordBoxes)=>{
  return{
    type:'SET_GLOBAL_WORDBOXES',
    gWordBoxes
  };
};
export var addMoreGlobalWordBoxes=(gWordBoxes)=>{
  return {
    type:'ADD_MORE_GLOBAL_WORDBOXES',
    gWordBoxes
  }
}
export var startDLGWordBoxes = () =>{
  return (dispatch,getState)=>{

    dispatch(globalW8Dialog());
    var sortWBG =getState().regularReducer.wbgSortBy;
  //  var numIGlobal=getState().regularReducer.numIGlobal;
    var gWordBoxesRef = ref.child(`global/wordboxes`)
          .orderByChild(sortWBG)
          .limitToFirst(50)
          ;

    return gWordBoxesRef.once('value').then((snapshot)=>{
      var gWordBoxes = snapshot.val() || {};

      //console.log(gWordBoxes);
      var parsedGWordBoxes = []; //redux expect to be an Array Object
      //we conver it

    /*  snapshot.forEach((inSnap) => {
           const gWB = inSnap.val()
           console.log(inSnap);
           console.log(inSnap.key);
           console.log(gWB);
       });*/

   snapshot.forEach((inSnap) => {
     var gWB = inSnap.val();


     if(gWB.hasOwnProperty('wordbox')){
       gWB.wordbox.updatedAt= (-1* (gWB.wordbox.updatedAt)); //FB trick to order data Descending way
     if(gWB.hasOwnProperty('comments')){
     var parsedComments = [];
     Object.keys(gWB.comments).forEach(commentId=>{
       if((gWB['comments'][commentId]).hasOwnProperty('replys')){
       var parsedReplys = [];
       Object.keys(gWB['comments'][commentId]['replys']).forEach(replyId=>{
         parsedReplys.push({
           id:replyId,
           ...gWB['comments'][commentId]['replys'][replyId]
         });
       });
         parsedComments.push({
           id:commentId,
           ...gWB['comments'][commentId],
           replys:parsedReplys
         });
       }
       else{
         parsedComments.push({
           id:commentId,
           ...gWB['comments'][commentId]
         });
       }
     });
     parsedGWordBoxes.push({
         id: inSnap.key,
         ...gWB,
         comments:parsedComments
     });
   }
   else{
     parsedGWordBoxes.push({
         id: inSnap.key,
         ...gWB
     });
   }
 }
   });

  /*
      Object.keys(gWordBoxes).forEach((gWordBoxId)=>{
        if((gWordBoxes[gWordBoxId]).hasOwnProperty('wordbox')){
        if((gWordBoxes[gWordBoxId]).hasOwnProperty('comments')){
        var parsedComments = [];
          Object.keys(gWordBoxes[gWordBoxId]['comments']).forEach(commentId=>{
            if((gWordBoxes[gWordBoxId]['comments'][commentId]).hasOwnProperty('replys')){
            var parsedReplys = [];
              Object.keys(gWordBoxes[gWordBoxId]['comments'][commentId]['replys']).forEach(replyId=>{
                parsedReplys.push({
                  id:replyId,
                  ...gWordBoxes[gWordBoxId]['comments'][commentId]['replys'][replyId]
                });
              });
              parsedComments.push({
                id:commentId,
                ...gWordBoxes[gWordBoxId]['comments'][commentId],
                replys:parsedReplys
              });
            }
            else{
              parsedComments.push({
                id:commentId,
                ...gWordBoxes[gWordBoxId]['comments'][commentId]
              });
            }
          });

          parsedGWordBoxes.push({
              id: gWordBoxId,
              ...gWordBoxes[gWordBoxId],
              comments:parsedComments
          });

        }
        else{
          parsedGWordBoxes.push({
              id: gWordBoxId,
              ...gWordBoxes[gWordBoxId]
          });
        }

      }
    }); */


        dispatch(setGlobalWordBoxes(parsedGWordBoxes));
        setTimeout( ()=>{dispatch(globalW8Dialog());}, 2000);

    });
  };
};
export var startDLGWordBoxesScroll = (lastBN,lastKey) =>{
  return (dispatch,getState)=>{

    if(getState().regularReducer.wbgSortBy!=='wordbox/boxName')
    lastBN=-1*lastBN;

    dispatch(globalW8MoreDialog());
    var sortWBG =getState().regularReducer.wbgSortBy;
  //  var numIGlobal=getState().regularReducer.numIGlobal;
    var gWordBoxesRef = ref.child(`global/wordboxes`)
          .orderByChild(sortWBG)
          .startAt(lastBN,lastKey)
          .limitToFirst(50)
          ;

    return gWordBoxesRef.once('value').then((snapshot)=>{
      var gWordBoxes = snapshot.val() || {};

      //console.log(gWordBoxes);
      var parsedGWordBoxes = []; //redux expect to be an Array Object
      //we conver it

    /*  snapshot.forEach((inSnap) => {
           const gWB = inSnap.val()
           console.log(inSnap);
           console.log(inSnap.key);
           console.log(gWB);
       });*/

   snapshot.forEach((inSnap) => {
     var gWB = inSnap.val();

     if(inSnap.key!==lastKey){
     if(gWB.hasOwnProperty('wordbox')){
       gWB.wordbox.updatedAt= (-1* (gWB.wordbox.updatedAt)); //FB trick to order data Descending way
     if(gWB.hasOwnProperty('comments')){
     var parsedComments = [];
     Object.keys(gWB.comments).forEach(commentId=>{
       if((gWB['comments'][commentId]).hasOwnProperty('replys')){
       var parsedReplys = [];
       Object.keys(gWB['comments'][commentId]['replys']).forEach(replyId=>{
         parsedReplys.push({
           id:replyId,
           ...gWB['comments'][commentId]['replys'][replyId]
         });
       });
         parsedComments.push({
           id:commentId,
           ...gWB['comments'][commentId],
           replys:parsedReplys
         });
       }
       else{
         parsedComments.push({
           id:commentId,
           ...gWB['comments'][commentId]
         });
       }
     });
     parsedGWordBoxes.push({
         id: inSnap.key,
         ...gWB,
         comments:parsedComments
     });
   }
   else{
     parsedGWordBoxes.push({
         id: inSnap.key,
         ...gWB
     });
   }
 }}
   });



        dispatch(addMoreGlobalWordBoxes(parsedGWordBoxes));
        setTimeout( ()=>{dispatch(globalW8MoreDialog());}, 2000);

        var endPass=false;
        if(parsedGWordBoxes.length<50) endPass=true;
        setTimeout(()=>{dispatch(globalItemsNumber(endPass));},1000);

    });
  };
};
export var startDLGWordBoxesSrch = (txSearch) =>{
  return (dispatch,getState)=>{
    dispatch(globalW8Dialog());
    var txShlo=txSearch.toLowerCase();
    var gWordBoxesRef = ref.child(`global/wordboxes`).orderByChild('wordbox/boxName').equalTo(txShlo);

    return gWordBoxesRef.once('value').then((snapshot)=>{
      var gWordBoxes = snapshot.val() || {};
      console.log(gWordBoxes);
      var parsedGWordBoxes = []; //redux expect to be an Array Object
      snapshot.forEach((inSnap) => {
        var gWB = inSnap.val();


        if(gWB.hasOwnProperty('wordbox')){
          gWB.wordbox.updatedAt= (-1* (gWB.wordbox.updatedAt)); //FB trick to order data Descending way
        if(gWB.hasOwnProperty('comments')){
        var parsedComments = [];
        Object.keys(gWB.comments).forEach(commentId=>{
          if((gWB['comments'][commentId]).hasOwnProperty('replys')){
          var parsedReplys = [];
          Object.keys(gWB['comments'][commentId]['replys']).forEach(replyId=>{
            parsedReplys.push({
              id:replyId,
              ...gWB['comments'][commentId]['replys'][replyId]
            });
          });
            parsedComments.push({
              id:commentId,
              ...gWB['comments'][commentId],
              replys:parsedReplys
            });
          }
          else{
            parsedComments.push({
              id:commentId,
              ...gWB['comments'][commentId]
            });
          }
        });
        parsedGWordBoxes.push({
            id: inSnap.key,
            ...gWB,
            comments:parsedComments
        });
      }
      else{
        parsedGWordBoxes.push({
            id: inSnap.key,
            ...gWB
        });
      }
    }
      });
        dispatch(setGlobalWordBoxes(parsedGWordBoxes));
        setTimeout( ()=>{dispatch(globalW8Dialog());}, 2000);
    });
  };
};
export var startDLGWordBoxesByUser = (userSH) =>{
  return (dispatch,getState)=>{
    dispatch(globalW8Dialog());
    var gWordBoxesRef = ref.child(`global/wordboxes`).orderByChild('wordbox/createBy').equalTo(userSH);

    return gWordBoxesRef.once('value').then((snapshot)=>{
      var gWordBoxes = snapshot.val() || {};
      console.log(gWordBoxes);
      var parsedGWordBoxes = []; //redux expect to be an Array Object
      snapshot.forEach((inSnap) => {
        var gWB = inSnap.val();


        if(gWB.hasOwnProperty('wordbox')){
          gWB.wordbox.updatedAt= (-1* (gWB.wordbox.updatedAt)); //FB trick to order data Descending way
        if(gWB.hasOwnProperty('comments')){
        var parsedComments = [];
        Object.keys(gWB.comments).forEach(commentId=>{
          if((gWB['comments'][commentId]).hasOwnProperty('replys')){
          var parsedReplys = [];
          Object.keys(gWB['comments'][commentId]['replys']).forEach(replyId=>{
            parsedReplys.push({
              id:replyId,
              ...gWB['comments'][commentId]['replys'][replyId]
            });
          });
            parsedComments.push({
              id:commentId,
              ...gWB['comments'][commentId],
              replys:parsedReplys
            });
          }
          else{
            parsedComments.push({
              id:commentId,
              ...gWB['comments'][commentId]
            });
          }
        });
        parsedGWordBoxes.push({
            id: inSnap.key,
            ...gWB,
            comments:parsedComments
        });
      }
      else{
        parsedGWordBoxes.push({
            id: inSnap.key,
            ...gWB
        });
      }
    }
      });
        dispatch(setGlobalWordBoxes(parsedGWordBoxes));
        setTimeout( ()=>{dispatch(globalW8Dialog());}, 2000);
    });
  };
};
/*****DELETE WORD ITEM******/
export var wordItemDelete = (idWB,idWI)=>{
  return {
    type:'WI_DELETE',
    idWB,idWI
  }
};
export var startWordItemDelete = (idWB,idWI)=>{
  return (dispatch, getState)=>{
    var wordItemRef = ref.child(`users/${getState().authReducer.uid}/wordboxes/${idWB}/words/${idWI}`);
    return wordItemRef.remove().then(()=>{
      dispatch(wordItemDelete(idWB,idWI));
      dispatch(globalWordBoxWords(idWB));
      console.log("Delete word successed");  //location.reload();  //dispatch(updateTodo(id,updates));
    });

  };
};

/**UPDATE a WORD ITEM**/
export var wordItemUpdate =(idWB,idWI,wordItem)=>{
  return {
    type:'WI_UPDATE',idWB,idWI,
    wordItem
  }
};
var globalWordBoxWords = (id) =>{
  return (dispatch, getState)=>{

      var wordBox =(getState().wordBoxesReducer).find(itm=>itm.id===id);
      var words =[];

  /*    var wordBoxChecked={
        boxName:wordBox.boxName,
        createdAt:wordBox.createdAt,
        updatedAt:moment().valueOf(),
        createBy:getState().authReducer.uid,
        creatorName:getState().authReducer.displayName,
        words:wordBox.hasOwnProperty('words')? wordBox.words :false
      };
      var gWordBoxRef = ref.child(`global/wordboxes/${id}/wordbox`).set(wordBoxChecked);*/


      if(wordBox.hasOwnProperty('words'))
        words =wordBox.words;

      if(wordBox.hasOwnProperty('gBoard')){
        if(wordBox.gBoard){
          var timeUp=-1*(moment().valueOf()); //FB Trick to ORDER Descending
          if(words.length>0){

            var gWordBoxWordsRef = ref.child(`global/wordboxes/${id}/wordbox`)
              .update({words:words,updatedAt:timeUp,createBy:getState().authReducer.uid});
            //ref.child(`global/wordboxes/${id}/wordbox/words`).set(words);
          }
          else {
            var gWordBoxWordsRef = ref.child(`global/wordboxes/${id}/wordbox`)
              .update({words:false,updatedAt:timeUp,createBy:getState().authReducer.uid});
            //ref.child(`global/wordboxes/${id}/wordbox/words`).set(false);
          }
          return gWordBoxWordsRef.then(()=>{
            console.log("Global WB W");
          });
        }
      }
  };
};
export var startWordItemUpdate = (idWB,idWI, itemUpdates)=>{
  return (dispatch, getState)=>{

    var itemHelper ={
      ...itemUpdates,
      lastUpdatedAt: moment().valueOf()
    };

    var wordItemRef = ref.child(`users/${getState().authReducer.uid}/wordboxes/${idWB}/words/${idWI}`);

    return wordItemRef.update(itemHelper).then(()=>{
    //  var wordItem= {idWI,...itemUpdates};
      dispatch(wordItemUpdate(idWB,idWI,itemHelper));
      dispatch(globalWordBoxWords(idWB));
      console.log("Edition WI: "+JSON.stringify({idWI,...itemHelper})); //location.reload();  //dispatch(updateTodo(id,updates));
    });
  };
};

/***** ADD WORD ITEM *****/
export var wordItemAdd = (wordItem,wordBoxId)=>{
  return {
    type:'WI_ADD',
    wordItem,
    wordBoxId
  }
};
export var createWordItem = (newItem,wordBoxId)=>{
  return (dispatch, getState)=>{
    //moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');  when u need to use it
    //two moments use a.diff(b, 'days') to get the diferences in days
    var itemHelper ={
      ...newItem,
      createdAt: moment().valueOf(),
      lastUpdatedAt: moment().valueOf()
    };
    var wordItemRef = ref
    .child(`users/${getState().authReducer.uid}/wordboxes/${wordBoxId}/words/`).push(itemHelper);

    return wordItemRef.then(()=>{
      dispatch(wordItemAdd({
        id:wordItemRef.key,
        ...itemHelper
      },wordBoxId));
      dispatch(globalWordBoxWords(wordBoxId));
      console.log("Check FB");
    });

  };
};

/*****CHECKER WORD BOX *****/
export var checkIfWordBoxExist = (id)=>{
  return (dispatch,getState)=> {

    var validator =false;
    getState().wordBoxesReducer.map((wordbox)=>{
      if(wordbox.id===id){
        validator =true;}
    });
    if(!validator){
      browserHistory.goBack();
      //window.location.href='http://localhost:3000/#/WordBoxes'; console.log("should redict");
    }

  };
};

/*****DELETE WORD BOX******/
export var wordBoxDelete = (id)=>{
  return {
    type:'WB_DELETE',
    id
  }
};
export var startWordBoxDelete = (id)=>{
  return (dispatch, getState)=>{
    var wbDeleteRef = ref.child(`users/${getState().authReducer.uid}/wordboxes/${id}`);

    return wbDeleteRef.remove().then(()=>{
      dispatch(wordBoxDelete(id));
      var wbGdel = ref.child(`global/wordboxes/${id}`);
      wbGdel.remove().then(()=>{
        console.log("Delete successed Global");
      });
    //  dispatch(globalWordBoxPost(id,false));
      console.log("Delete successed");  //location.reload();  //dispatch(updateTodo(id,updates));
    });



  };
};

/**UPDATE a WORD BOX**/
export var wordBoxUpdate =(id,wordBox)=>{
  return {
    type:'WB_UPDATE',id,
    wordBox
  }
};
var globalWordBoxPost = (id,gBoard) =>{
  return (dispatch, getState)=>{

      if(gBoard){
        var wordBox =(getState().wordBoxesReducer).find(itm=>itm.id===id);
        var wordBoxChecked={
          boxName:(wordBox.boxName).toLowerCase(),
          createdAt:wordBox.createdAt,
          updatedAt:-1*(moment().valueOf()),  //FB Trick to Order by Descending
          createBy:getState().authReducer.uid,
          creatorName:getState().authReducer.displayName,
          creatorAvatar:getState().authReducer.photoURL,
          words:wordBox.hasOwnProperty('words')? wordBox.words :false,
          makers:wordBox.hasOwnProperty('makers')?wordBox.makers :[]
        };
        var gWordBoxRef = ref.child(`global/wordboxes/${id}/wordbox`).set(wordBoxChecked);

      }
      else
        var gWordBoxRef = ref.child(`global/wordboxes/${id}/wordbox`).remove();

      return gWordBoxRef.then(()=>{
        console.log("Global post on FB ");
      })
  };
};
export var startWordBoxUpdate = (id, itemUpdates)=>{
  return (dispatch, getState)=>{
    var wordBoxRef = ref.child(`users/${getState().authReducer.uid}/wordboxes/${id}`);

    return wordBoxRef.update(itemUpdates).then(()=>{
      var wordBoxChecker =(getState().wordBoxesReducer).find(itm=>itm.id===id);
      var gWBPVal= wordBoxChecker.gBoard;
      if(itemUpdates.hasOwnProperty('gBoard'))gWBPVal=itemUpdates.gBoard;

      var wordBox= {id,...itemUpdates};
      dispatch(wordBoxUpdate(id,wordBox));
      dispatch(globalWordBoxPost(id,gWBPVal));
      console.log("Edition WB: "+JSON.stringify({id,...itemUpdates})); //location.reload();  //dispatch(updateTodo(id,updates));
    });
  };
};

/* ADD New Word Box for a User*/
export var wordBoxAdd = (wordBox)=>{
  return {
    type:'WB_ADD',
    wordBox
  }
};
export var createWordBox = (newItem)=>{
  return (dispatch, getState)=>{
    //moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');  when u need to use it
    //two moments use a.diff(b, 'days') to get the diferences in days
    var itemHelper ={
      ...newItem,
      createdAt: moment().valueOf(),
      lastCheckedAt: moment().valueOf()
     };
    var wordBoxRef = ref
    .child(`users/${getState().authReducer.uid}/wordboxes/`).push(itemHelper);

    return wordBoxRef.then(()=>{
      dispatch(wordBoxAdd({
        id:wordBoxRef.key,
        ...itemHelper
      }));
      if(itemHelper.gBoard)
        dispatch(globalWordBoxPost(wordBoxRef.key,newItem.gBoard));
      //console.log("it supouse that the upload was a successed");
    });

  };
};

export var setWordBoxes = (wordBoxes)=>{
  return{
    type:'SET_WORDBOXES',
    wordBoxes
  };
};
export var startDLWordBoxes = ()=>{
  return (dispatch, getState)=>{

    //var uid = getState().authReducer.uid;/// No necesario para leer data publica
    var wordBoxesRef = ref.child(`users/${getState().authReducer.uid}/wordboxes`);

    return wordBoxesRef.once('value').then((snapshot)=>{
      var wordBoxes = snapshot.val() || {};

      var parsedWordBoxes = []; //redux expect to be an Array Object
      //we conver it
      Object.keys(wordBoxes).forEach((wordBoxId)=>{

        if((wordBoxes[wordBoxId]).hasOwnProperty('words')){

          var parsedWords = [];
          Object.keys(wordBoxes[wordBoxId]['words']).forEach(wordId=>{
          //  console.log("Word Con: "+JSON.stringify(wordBoxes[wordBoxId]['words'][wordId]));
            parsedWords.push({
              id:wordId,
              ...wordBoxes[wordBoxId]['words'][wordId]
            });
          });
          parsedWordBoxes.push({
              id: wordBoxId,
              ...wordBoxes[wordBoxId],
              words:parsedWords
          });
        }
        else{
          parsedWordBoxes.push({
              id: wordBoxId,
              ...wordBoxes[wordBoxId]
          });
        }
      });

      dispatch(setWordBoxes(parsedWordBoxes));
    });

  };
};
