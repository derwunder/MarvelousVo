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
    case 'DRAWER_OPEN':
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      };
    default:
      return state;
  }
};
