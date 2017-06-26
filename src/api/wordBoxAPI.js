import moment from 'moment';

module.exports = {
  filterFriendList:function(frList,searchText){
    var filteredFrList =frList;
    searchText=searchText.toLowerCase();

    filteredFrList =filteredFrList.filter((fr)=>{
      var frNa = fr.frName.toLowerCase(); //.toLowerCase(); just to non sensitive case
      var frEm = fr.frEmail.toLowerCase();
      return searchText.length === 0 || frNa.indexOf(searchText) > -1 ||frEm.indexOf(searchText)>-1 ;
    });

    return filteredFrList;
  },
  filterWBGReplys: function(replys){
    var filteredWBGR =replys;
    filteredWBGR.sort(function(a, b) {
      var termA = a.replyTime ;   //.toUpperCase(); // ignore upper and lowercase
      var termB = b.replyTime ;  //.toUpperCase(); // ignore upper and lowercase
      if (termA < termB) {  return 1;  }
      if (termA > termB) {  return -1;   }
      // names must be equal
      return 0;
    });
    return filteredWBGR;

  },
  filterWBGComments: function(comments,searchText){
    var filteredWBGC =comments;
      searchText=searchText.toLowerCase();

      filteredWBGC =filteredWBGC.filter((comment)=>{
        var cmt = comment.comment.toLowerCase(); //.toLowerCase(); just to non sensitive case
        var userName = comment.hasOwnProperty('commentUName')? (comment.commentUName).toLowerCase():'null' ;
        return searchText.length === 0 || cmt.indexOf(searchText) > -1 ||userName.indexOf(searchText)>-1 ;
      });

    filteredWBGC.sort(function(a, b) {
      var termA = a.commentTime ;   //.toUpperCase(); // ignore upper and lowercase
      var termB = b.commentTime ;  //.toUpperCase(); // ignore upper and lowercase
      if (termA < termB) {  return 1;  }
      if (termA > termB) {  return -1;   }
      // names must be equal
      return 0;
    });
    return filteredWBGC;

  },
  filterWordsGlobal: function (wordsG, bookmark, searchText){
    var filteredWordsG =wordsG;
    searchText=searchText.toLowerCase();

    if(bookmark){
      filteredWordsG =filteredWordsG.filter((wi)=>{
        return wi.bookmark===true || wi.gBoard===bookmark ;
      });
    }

    filteredWordsG =filteredWordsG.filter((wi)=>{
      var wordTerm = wi.wordTerm.toLowerCase(); //.toLowerCase(); just to non sensitive case
      return searchText.length === 0 || wordTerm.indexOf(searchText) > -1 ;
    });

    filteredWordsG.sort(function(a, b) {
      var termA = a.wordTerm.toUpperCase();   //.toUpperCase(); // ignore upper and lowercase
      var termB = b.wordTerm.toUpperCase();  //.toUpperCase(); // ignore upper and lowercase
      if (termA < termB) {  return -1;  }
      if (termA > termB) {  return 1;   }
      // names must be equal
      return 0;
    });
    return filteredWordsG;
  },
  filterWordBoxesGlobal: function (wordBoxesG, tp, uid){
    var filteredWordBoxesG =wordBoxesG;

    if(tp===2){
      filteredWordBoxesG =filteredWordBoxesG.filter((wb)=>{
        var id= wb.wordbox.createBy;
        return id===uid;  //uid.length === 0 || id.indexOf(uid) > -1 ;
      });
    }
    filteredWordBoxesG.sort(function(a, b) {
      var termA = a.wordbox.boxName.toUpperCase();   //.toUpperCase(); // ignore upper and lowercase
      var termB = b.wordbox.boxName.toUpperCase();  //.toUpperCase(); // ignore upper and lowercase
      if (termA < termB) {  return -1;  }
      if (termA > termB) {  return 1;   }
      // names must be equal
      return 0;
    });
    return filteredWordBoxesG;
  },
  filterWordBoxes: function(wordBoxes, type, favorite, fBoard, gBoard,searchText ,wbSortBy){
    searchText=searchText.toLowerCase();
    var filteredWordBoxes =wordBoxes;

    if(type===1){
      filteredWordBoxes =filteredWordBoxes.filter((wordBox)=>{
      var lastCheck =moment().diff(wordBox.lastCheckedAt,"days");
      return lastCheck<=7 ;
    });}
    else if(type===2){
      filteredWordBoxes =filteredWordBoxes.filter((wordBox)=>{
      var lastCheck =moment().diff(wordBox.lastCheckedAt,"days");
      return lastCheck>=7 && lastCheck<=30 ;});
    }

    if(favorite){
      filteredWordBoxes =filteredWordBoxes.filter((wb)=>{
        return wb.favorite===true || wb.favorite===favorite ;
      });
    }
    if(fBoard){
      filteredWordBoxes =filteredWordBoxes.filter((wb)=>{
        return wb.fBoard===true || wb.fBoard===fBoard ;
      });
    }
    if(gBoard){
      filteredWordBoxes =filteredWordBoxes.filter((wb)=>{
        return wb.gBoard===true || wb.gBoard===gBoard ;
      });
    }

    filteredWordBoxes =filteredWordBoxes.filter((wb)=>{
      var boxName = wb.boxName.toLowerCase(); //.toLowerCase(); just to non sensitive case
      return searchText.length === 0 || boxName.indexOf(searchText) > -1 ;
    });

    //Order by Name!!!
    if(wbSortBy==='aZ'){
      filteredWordBoxes.sort(function(a, b) {
        var termA = a.boxName.toUpperCase();   //.toUpperCase(); // ignore upper and lowercase
        var termB = b.boxName.toUpperCase();  //.toUpperCase(); // ignore upper and lowercase
        if (termA < termB) {  return -1;  }
        if (termA > termB) {  return 1;   }
        // names must be equal
        return 0;
      });
    }
    else if(wbSortBy==='rV'){
      filteredWordBoxes.sort(function(a, b) {
        var termA = a.lastCheckedAt //.toUpperCase(); // ignore upper and lowercase
        var termB = b.lastCheckedAt  //.toUpperCase(); // ignore upper and lowercase
        if (termA < termB) {  return 1;  }
        if (termA > termB) {  return -1;   }
        // names must be equal
        return 0;
      });
    }
    else if(wbSortBy==='rA'){
      filteredWordBoxes.sort(function(a, b) {
        var termA = a.createdAt //.toUpperCase(); // ignore upper and lowercase
        var termB = b.createdAt  //.toUpperCase(); // ignore upper and lowercase
        if (termA < termB) {  return 1;  }
        if (termA > termB) {  return -1;   }
        // names must be equal
        return 0;
      });
    }

    return filteredWordBoxes;
  },
  filterWords: function(words,bookmark,searchText){
    searchText=searchText.toLowerCase();
    var filteredWords =words;

    if(bookmark){
      filteredWords =filteredWords.filter((wi)=>{
        return wi.bookmark===true || wi.gBoard===bookmark ;
      });
    }

    filteredWords =filteredWords.filter((wi)=>{
      var wordTerm = wi.wordTerm.toLowerCase(); //.toLowerCase(); just to non sensitive case
      return searchText.length === 0 || wordTerm.indexOf(searchText) > -1 ;
    });

    //Order by Name!!!
    filteredWords.sort(function(a, b) {
      var termA = a.wordTerm.toUpperCase();   //.toUpperCase(); // ignore upper and lowercase
      var termB = b.wordTerm.toUpperCase();  //.toUpperCase(); // ignore upper and lowercase
      if (termA < termB) {  return -1;  }
      if (termA > termB) {  return 1;   }
      // names must be equal
      return 0;
    });
    return filteredWords;
  }

};
