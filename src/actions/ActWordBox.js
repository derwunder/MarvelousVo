import {ref} from '../firebase/constants';

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

/* ADD New Word Box for a User*/
export var createWordBox = (newItem)=>{
  return (dispatch, getState)=>{

    var wordBoxRef = ref
    .child(`users/${getState().authReducer.uid}/wordboxes/`).push(newItem);

    return wordBoxRef.then(()=>{
      dispatch(wordBoxAdd({
        id:wordBoxRef.key,
        ...newItem
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
        parsedWordBoxes.push({
            id: wordBoxId,
            ...wordBoxes[wordBoxId]
        });
      });

      dispatch(setWordBoxes(parsedWordBoxes));
    });

  };
};
