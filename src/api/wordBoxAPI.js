import moment from 'moment';

module.exports = {
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
  filterWords: function(words){

    var filteredWords =words;
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
  },
  filterRecipes: function(recipes,  searchText, searchCategoria, searchFavorito){
    searchText=searchText.toLowerCase();
    var filteredRecipes = recipes;

    //Filter by Completed
  /*  filteredRecipes =filteredRecipes.filter((todo)=>{
      return !todo.completed || showCompleted;
    });*/

    //filter by search
    filteredRecipes =filteredRecipes.filter((recipe)=>{
      var titulo = recipe.titulo.toLowerCase(); //.toLowerCase(); just to non sensitive case
      return searchText.length === 0 || titulo.indexOf(searchText) > -1 ;
    });

    //filter by Categoria
    filteredRecipes =filteredRecipes.filter((recipe)=>{
      var categoria = recipe.categCol; //.toLowerCase(); just to non sensitive case
      return searchCategoria.length === 0 || categoria.indexOf(searchCategoria) > -1 ;
    });

    //filter by Categoria
    filteredRecipes =filteredRecipes.filter((recipe)=>{
      //var categoria = recipe.favorito; //.toLowerCase(); just to non sensitive case
      return recipe.favorito===true || recipe.favorito===searchFavorito ;
    });

    //Sort by completed
  /*  filteredRecipes.sort((a,b)=>{
      if(!a.completed && b.completed)
        return -1;
      else if(a.completed && !b.completed)
        return 1;
      else
        return 0;

    });*/

    return filteredRecipes;
  }
};
