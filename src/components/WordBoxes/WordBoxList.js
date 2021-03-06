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
  componentWillMount(){

  }
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
    var value =true;var value2 =false;
    return (
      <StackGrid
      columnWidth={150}
      monitorImagesLoaded={true} //this props helps monitorin images load - help height size
      appear={scaleDown.appear}
     appeared={scaleDown.appeared}
     enter={scaleDown.enter}
     entered={scaleDown.entered}
     leaved={scaleDown.leaved}
    >
      <div key="key1" >
        <WordBox  pic={value}/>
      </div>
      <div key="key2">
        <WordBox  pic={value2}/>
      </div>
      <div key="key3" >
        <WordBox  pic={value}/>
      </div>
      <div key="key4" >
        <WordBox  pic={value}/>
      </div>
      <div key="key5" >
        <WordBox  pic={value2}/>
      </div>
      <div key="key6" >
        <WordBox  pic={value}/>
      </div>
      <div key="key7" > {/*style={{display:'inline-block',verticalAlign:'top'}}*/}
        <WordBox  pic={value2}/>
      </div>
    </StackGrid>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBoxList);
