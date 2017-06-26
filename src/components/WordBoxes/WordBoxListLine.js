import React, { Component } from 'react';
import {connect} from 'react-redux';

import WordBox from './WordBox';
//import '../../css/wordbox.css';
//import RecipeItem from './RecipeItem';
//import recipeAPI from '../../api/recipeAPI';

import {Subheader} from 'material-ui';

class WordBoxListLine extends Component {
  componentWillMount(){

  }
  render() {
    return (
      <div >
        <Subheader style={{maxWidth: 900,margin: 'auto'}} >
          Most Popular</Subheader>
        <div style={{maxWidth: 1000,margin:'auto',display:'flex',flexWrap:'wrap',justifyContent: 'space-around'}}>
          <div style={{overflowX: 'auto',display:'flex',flexWrap:'nowrap',margin:5}}>

          <WordBox/>
          <WordBox/><WordBox/><WordBox/><WordBox/>
          <WordBox/><WordBox/><WordBox/><WordBox/>
          </div>
        </div>
        <Subheader style={{maxWidth: 900,margin: 'auto'}}>
          Recent Added</Subheader>
          <div style={{maxWidth: 1000,margin:'auto',display:'flex',flexWrap:'wrap',justifyContent: 'space-around'}}>
            <div style={{overflowX: 'auto',display:'flex',flexWrap:'nowrap',margin:5}}>

            <WordBox/>
            <WordBox/><WordBox/><WordBox/><WordBox/>
            <WordBox/><WordBox/><WordBox/><WordBox/>
            </div>
          </div>


      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBoxListLine);
