export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USERDATA_CHANGE':
      return {
        ...state,
        ...action.userData
      };
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

export var gWordBoxesReducer = (state=[],action) =>{
  switch (action.type) {
    case 'DOWNLOAD_GLOBAL_WORDBOX':
      return state.map(wb=>{
        if(wb.id===action.idWBG){
          return{
            ...wb,
            downloads: wb.hasOwnProperty('downloads') ? Object.assign({},wb.downloads,action.item):action.item
          };
        }
        else {
          return wb;
        }
      });
    case 'DELETE_REPLY_GLOBAL_WORDBOX':
      return state.map(gWB=>{
        if(gWB.id===action.idWBG){
          return {
            ...gWB,
            comments:[
              ...(gWB.comments).map((comment)=>{
                if(comment.id===action.idCm){
                  const indexOfToDelete = (comment.replys).findIndex(reply => {
                      return reply.id === action.idRe
                    });
                    return {
                      ...comment,
                      replys:[
                        ...(comment.replys).slice(0, indexOfToDelete),
                        ...(comment.replys).slice(indexOfToDelete + 1)
                      ]
                    }
                }
                else {
                  return comment;
                }
              })
            ]
          };
        }
        else{
          return gWB;
        }
      });
    case 'ADD_REPLY_GLOBAL_WORDBOX':
      return state.map(gWB=>{
        if(gWB.id===action.idWBG){
          return {
            ...gWB,
            comments:[
              ...(gWB.comments).map((comment)=>{
                if(comment.id===action.idCm){
                  if(comment.hasOwnProperty('replys')){
                    return {
                      ...comment,
                      replys:[
                        ...comment.replys,
                        action.newReply
                      ]
                    }
                  }
                  else{
                    return {
                      ...comment,
                      replys:[
                        action.newReply
                      ]
                    }
                  }
                }
                else {
                  return comment;
                }
              })
            ]
          };
        }
        else{
          return gWB;
        }
      });
    case 'DELETE_COMMENT_GLOBAL_WORDBOX':
      return state.map((gWB) => {
        if(gWB.id===action.idWBG){
          const indexOfToDelete = (gWB.comments).findIndex(comment => {
              return comment.id === action.idCm
            });
          return {
            ...gWB,
             comments:[
               ...(gWB.comments).slice(0, indexOfToDelete),
               ...(gWB.comments).slice(indexOfToDelete + 1)
             ]
          };
        } else {
          return gWB;
        }
      });
    case 'ADD_COMMENT_GLOBAL_WORDBOX':
      return state.map(gWB=>{
        if(gWB.id===action.idWBG){
          if(gWB.hasOwnProperty('comments')){
            return {
                ...gWB,
                comments:[
                  ...gWB.comments,
                  action.newComment
                ]
            };
          }
          else {
            return {
                ...gWB,
                comments:[
                  action.newComment
                ]
            };
          }
        }
        else{
          return gWB;
        }
      });
    case 'LIKE_GLOBAL_WORDBOX':
      return state.map(wb=>{
        if(wb.id===action.idWBG){
          return{
            ...wb,
            like: wb.hasOwnProperty('like') ? Object.assign({},wb.like,action.item):action.item,
            dislike:wb.hasOwnProperty('dislike')? Object.keys(wb.dislike).reduce((result, key) => {
                if (key !== action.uid) {
                    result[key] = wb.dislike[key];
                }
                return result;
            }, {}):{}
          };
        }
        else {
          return wb;
        }
      });
    case 'DISLIKE_GLOBAL_WORDBOX':
      return state.map(wb=>{
        if(wb.id===action.idWBG){
          return{
            ...wb,
            dislike: wb.hasOwnProperty('dislike') ? Object.assign({},wb.dislike,action.item):action.item,
            like:wb.hasOwnProperty('like')? Object.keys(wb.like).reduce((result, key) => {
                if (key !== action.uid) {
                    result[key] = wb.like[key];
                }
                return result;
            }, {}):{}
          };
        }
        else {
          return wb;
        }
      });
    case 'DELETE_LIKE_GLOBAL_WORDBOX':
      return state.map(wb=>{
        if(wb.id===action.idWBG){
            return {
              ...wb,
              like:wb.hasOwnProperty('like')? Object.keys(wb.like).reduce((result, key) => {
                  if (key !== action.uid) {
                      result[key] = wb.like[key];
                  }
                  return result;
              }, {}):{},
              dislike:wb.hasOwnProperty('dislike')? Object.keys(wb.dislike).reduce((result, key) => {
                  if (key !== action.uid) {
                      result[key] = wb.dislike[key];
                  }
                  return result;
              }, {}):{}
            }
        }
        else{
          return wb;
        }
      });
    case 'ADD_MORE_GLOBAL_WORDBOXES':
      return[
        ...state,
        ...action.gWordBoxes
      ];
    case 'ADD_MORE_FGLOBAL_WORDBOXES':
      if(action.inx>0)
        return[
          ...state,
          ...action.gWordBoxes
        ];
      else
        return[
          ...action.gWordBoxes
        ];
    case 'SET_GLOBAL_WORDBOXES':
      return [
        ...action.gWordBoxes
      ];
    case 'LOGOUT':
      return [];
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
    case 'GLOBAL_ITEMS_NUM':
      return{
        ...state,
        numIGlobal:action.numIGlobal
      }
    case 'GLOBAL_MORE_WAIT':
      return{
        ...state,
        w8GlobalMore:!state.w8GlobalMore
      }
    case'GLOBAL_WAIT':
      return{
        ...state,
        w8Global:!state.w8Global
      }
    case 'SORT_GLOBAL_WORDBOXES_BY':
      return{
        ...state,
        wbgSortBy:action.wbgSortBy
      }
    case 'FRIEND_LIST_CHANGE':
      return{
        ...state,
        friendList:action.friendList
      };
    case 'FRIEND_REQUEST':
      return{
        ...state,
        friendReq:action.friendReq
      };
    case 'USER_SEARCH':
      return{
        ...state,
        userSearch:action.userLT
      };
    case 'USERDATA_DATA_SEARCHABLE':
      return{
        ...state,
        userDataSearchable:!state.userDataSearchable
      };
    case 'LOGIN_STAT':
      return{
        ...state,
        loginStat:action.loginStat
      };
    case 'FILTER_WORDITEMS_BOOKMARK':
      return{
        ...state,
        wiBookmark:!state.wiBookmark
      };
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
