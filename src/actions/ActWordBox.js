import {ref} from '../firebase/constants';
import moment from 'moment';
import {browserHistory} from 'react-router';


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

export var startWordItemUpdate = (idWB,idWI, itemUpdates)=>{
  return (dispatch, getState)=>{
    var wordItemRef = ref.child(`users/${getState().authReducer.uid}/wordboxes/${idWB}/words/${idWI}`);

    return wordItemRef.update(itemUpdates).then(()=>{
    //  var wordItem= {idWI,...itemUpdates};
      dispatch(wordItemUpdate(idWB,idWI,itemUpdates));
      console.log("Edition WI: "+JSON.stringify({idWI,...itemUpdates})); //location.reload();  //dispatch(updateTodo(id,updates));
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
    /*var itemHelper ={
      ...newItem,
      createdAt: moment().valueOf(),
      lastCheckedAt: moment().valueOf()
    };*/
    var wordItemRef = ref
    .child(`users/${getState().authReducer.uid}/wordboxes/${wordBoxId}/words/`).push(newItem);

    return wordItemRef.then(()=>{
      dispatch(wordItemAdd({
        id:wordItemRef.key,
        ...newItem
      },wordBoxId));
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
    var wordBoxRef = ref.child(`users/${getState().authReducer.uid}/wordboxes/${id}`);
    return wordBoxRef.remove().then(()=>{
      dispatch(wordBoxDelete(id));
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

export var startWordBoxUpdate = (id, itemUpdates)=>{
  return (dispatch, getState)=>{
    var wordBoxRef = ref.child(`users/${getState().authReducer.uid}/wordboxes/${id}`);

    return wordBoxRef.update(itemUpdates).then(()=>{
      var wordBox= {id,...itemUpdates};
      dispatch(wordBoxUpdate(id,wordBox));
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

        //console.log("has words: "+(wordBoxes[wordBoxId]).hasOwnProperty('words'));

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
