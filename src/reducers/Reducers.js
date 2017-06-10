export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.userData
      };
    case 'LOGOUT':
      return {};
    case 'EDITOR_MODE':
      return {
        ...state,
        editorMode: !state.editorMode
      };
    default:
      return state;
  }
};

export var wordBoxesReducer = (state = [], action) => {
  switch (action.type) {
    case 'WI_DELETE':
      return state.map((wordBox) => {
        if(wordBox.id===action.idWB){
          const indexOfToDelete = (wordBox.words).findIndex(word => {
              return word.id === action.idWI
            });
          return {
            ...wordBox,
             words:[
               ...(wordBox.words).slice(0, indexOfToDelete),
               ...(wordBox.words).slice(indexOfToDelete + 1)
             ]
          };
        } else {
          return wordBox;
        }
      });
    case 'WI_UPDATE':
      return state.map((wordBox) => {
        if(wordBox.id===action.idWB){
          return {
            ...wordBox,
             words:[
               ...(wordBox.words).map((wordItem)=>{
                 if(wordItem.id===action.idWI){
                   return {
                     ...wordItem,
                     ...action.wordItem
                   }
                 }
                 else {
                   return wordItem;
                 }
               })
             ]
          };
        } else {
          return wordBox;
        }
      });
    case 'WI_ADD':
      return state.map((wordBox) => {
        if (wordBox.id === action.wordBoxId) {
          if(wordBox.hasOwnProperty('words')){
            return {
              ...wordBox,
              words:[
                ...wordBox.words,
                action.wordItem
              ]
            };
          }else{
            return {
              ...wordBox,
              words:[
                action.wordItem
              ]
            };
          }
        } else {
          return wordBox;
        }
      });
    case 'SET_WORDBOXES':
      return[
          ...action.wordBoxes
      ];
    case 'WB_ADD':
      return [
        ...state,
        action.wordBox
      ];
    case 'WB_UPDATE':
      return state.map((wordBox) => {
        if (wordBox.id === action.id) {
          return {
            ...wordBox,
            ...action.wordBox
          };
        } else {
          return wordBox;
        }
      });
    case 'WB_DELETE':
    /*  this method require a new object state
        The second method is refer in the docs http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
     const newState = Object.assign([], state);
      newState.splice(indexOfToDelete, 1);
      return newState;*/
      const indexOfToDelete = state.findIndex(wordBox => {
          return wordBox.id === action.id
        });
      return [
        ...state.slice(0, indexOfToDelete),
        ...state.slice(indexOfToDelete + 1)
      ];
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

export var regularReducer = (state ={}, action) =>{
  switch (action.type) {
    case 'SORT_WORDBOXES_BY':
      return{
        ...state,
        wbSortBy:action.wbSortBy
      };
    case 'FILTER_WORDBOXES_SEARCH':
      return{
        ...state,
        wbSearch:action.wbSearch
      }
    case 'FILTER_WORDBOXES_FBOARD':
     return{
       ...state,
       wbFBoard:!state.wbFBoard
     };
    case 'FILTER_WORDBOXES_GBOARD':
     return{
       ...state,
       wbGBoard:!state.wbGBoard
     };
    case 'FILTER_WORDBOXES_FAVORITE':
      return {
        ...state,
        wbFavorite:!state.wbFavorite
      };
    case 'DRAWER_OPEN':
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      };
    default:
      return state;
  }
};
