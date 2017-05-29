import React, { Component } from 'react';
import {connect} from 'react-redux';

import WordBox from './WordBox';
import '../../css/wordbox.css';
//import RecipeItem from './RecipeItem';
//import recipeAPI from '../../api/recipeAPI';

import {Subheader} from 'material-ui';


import StackGrid, { transitions } from "react-stack-grid";
const { scaleDown } = transitions;



class WordBoxList extends Component {

  render() {  /*overlap  es un prop en Badge*/

    //var { searchRecipeReducer}=this.props;

  /*  var renderTodos = () => {
    return TodoAPI.filterRecipes(todos, showCompleted, searchText).map((todo) =>{
      return (<Todo key={todo.id} {...todo}/>);
    });
  };*/

/*  var recipeItemsLoad = ()=>{
    return recipeAPI.filterRecipes(recipeBoxReducer,
      searchRecipeReducer.searchText,
      searchRecipeReducer.searchCategoria,
      searchRecipeReducer.searchFavorito).reverse().map((item) =>{
      return <RecipeItem key={item.id} item={item}/>;
    });
  };

    /*var recipeItemsLoad = (item,index)=>{
        return <RecipeItem key={item.id} item={item}/>;
    };*/

var {wordBoxesReducer, authReducer}=this.props;

    var wordBoxesLoad = (itemRender) =>{
      //console.log("you are here"+JSON.stringify(itemRender));

      return (
        itemRender.map((item,index)=>{
          if(item.hasOwnProperty('id'))
          return <div key={"key"+index}>
            <WordBox pic={value2} item={item}/></div>
        })
      );
    };

    var value =true;var value2 =false;
    return (<div>

      <StackGrid
      columnWidth={150}
      monitorImagesLoaded={true} //this props helps monitorin images load - help height size
      appear={scaleDown.appear}
     appeared={scaleDown.appeared}
     enter={scaleDown.enter}
     entered={scaleDown.entered}
     leaved={scaleDown.leaved}
    >

      {wordBoxesLoad(wordBoxesReducer)}{/*style={{display:'inline-block',verticalAlign:'top'}}*/}

    </StackGrid></div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBoxList);
