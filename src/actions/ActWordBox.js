import {ref} from '../firebase/constants';


export var createWordBox = (newItem)=>{
  return (dispatch, getState)=>{

    var wordBoxRef = ref
    .child(`users/${getState().authReducer.uid}/wordboxes/`).push(newItem);

    return wordBoxRef.then(()=>{
      //console.log("it supouse that the upload was a successed");
    });

  };
};
export var recipeItemInfo = (recipeInfo)=>{
  return {
    type:'RECIPE_EDITOR_INFO',
    recipeInfo
  };
};
