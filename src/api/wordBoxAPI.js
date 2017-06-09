import moment from 'moment';

module.exports = {
  filterWordBoxes: function(wordBoxes, type){
    var filteredWordBoxes =wordBoxes;

    if(type===1){
      filteredWordBoxes =filteredWordBoxes.filter((wordBox)=>{
      var lastCheck =moment().diff(wordBox.lastCheckedAt,"days");
      return lastCheck<=7 ;
    });}else if(type===2){
      filteredWordBoxes =filteredWordBoxes.filter((wordBox)=>{
      var lastCheck =moment().diff(wordBox.lastCheckedAt,"days");
      return lastCheck>=7 && lastCheck<=30 ;});
    }

    //Order by Name!!!
    filteredWordBoxes.sort(function(a, b) {
      var termA = a.boxName.toUpperCase();   //.toUpperCase(); // ignore upper and lowercase
      var termB = b.boxName.toUpperCase();  //.toUpperCase(); // ignore upper and lowercase
      if (termA < termB) {
        return -1;
      }
      if (termA > termB) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    return filteredWordBoxes;
  },
  filterWords: function(words){

    var filteredWords =words;

    filteredWords.sort(function(a, b) {
      var termA = a.wordTerm.toUpperCase();   //.toUpperCase(); // ignore upper and lowercase
      var termB = b.wordTerm.toUpperCase();  //.toUpperCase(); // ignore upper and lowercase
      if (termA < termB) {
        return -1;
      }
      if (termA > termB) {
        return 1;
      }
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
