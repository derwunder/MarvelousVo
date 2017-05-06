import React, { Component } from 'react';
import {connect} from 'react-redux';

import WordBox from './WordBox';
import '../../css/wordbox.css';
//import RecipeItem from './RecipeItem';
//import recipeAPI from '../../api/recipeAPI';

import {Subheader} from 'material-ui';

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

    return (
      <div >
        <Subheader style={{maxWidth: 1100,margin: 'auto'}} >
          Most Popular</Subheader>
        <div style={{maxWidth: 1200,margin:'auto',display:'flex',flexWrap:'wrap',justifyContent: 'space-around'}}>
          <div style={{overflowX: 'auto',display:'flex',flexWrap:'nowrap',margin:5}}>

          <WordBox/>
          <WordBox/><WordBox/><WordBox/><WordBox/>
          <WordBox/><WordBox/><WordBox/><WordBox/>
          </div>
        </div>
        <Subheader style={{maxWidth: 1100,margin: 'auto'}}>
          Recent Added</Subheader>
          <div style={{maxWidth: 1200,margin:'auto',display:'flex',flexWrap:'wrap',justifyContent: 'space-around'}}>
            <div style={{overflowX: 'auto',display:'flex',flexWrap:'nowrap',margin:5}}>

            <WordBox/>
            <WordBox/><WordBox/><WordBox/><WordBox/>
            <WordBox/><WordBox/><WordBox/><WordBox/>
            </div>
          </div>


        {/*recipeItemsLoad()*/}
      {/*recipeBoxReducer.map(recipeItemsLoad)*/}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBoxList);
