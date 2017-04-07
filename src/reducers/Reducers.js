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

export var drawerReducer = (state ={}, action) =>{
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
