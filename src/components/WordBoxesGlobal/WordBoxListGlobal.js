import React, { Component } from 'react';
import {connect} from 'react-redux';

import WordBoxGlobal from './WordBoxGlobal';
import '../../css/wordbox.css';
//import RecipeItem from './RecipeItem';
//import recipeAPI from '../../api/recipeAPI';

import {Subheader} from 'material-ui';


import StackGrid, { transitions } from "react-stack-grid";
const { scaleDown } = transitions;

import wordBoxAPI from '../../api/wordBoxAPI';



class WordBoxListGlobal extends Component {

  constructor(props) {
      super(props);
      this.state = {
        message:'not at bottom'
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        this.setState({
          message:'bottom reached'
        });
      } else {
        this.setState({
          message:'not at bottom'
        });
      }
    }

  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  render() {


var {gWordBoxesReducer, authReducer}=this.props;
var {wbFavorite,wbFBoard,wbGBoard,wbSearch,wbSortBy} =this.props.regularReducer;
//console.log(wbFavorite);

    var wordBoxesLoad = () =>{

      if(gWordBoxesReducer.length>0){
          var tp=this.props.type;
          var uid=authReducer.uid;
        return (
          wordBoxAPI.filterWordBoxesGlobal(gWordBoxesReducer,tp,uid).map((item,index)=>{
            var gWBDls=0;
            item.hasOwnProperty('downloads')?gWBDls=Object.keys(item.downloads).length:gWBDls=0;
            if(item.hasOwnProperty('id'))
            return <div key={"gKey"+index}>
              <WordBoxGlobal pic={value2} item={item.wordbox} downloads={gWBDls} id={item.id}/></div>
          })
        );
      }
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

      {wordBoxesLoad()}{/*style={{display:'inline-block',verticalAlign:'top'}}*/}

    </StackGrid>
    <div>
        <div className="fixedDiv">{this.state.message}</div>
        <div className="scrollDiv"></div>
      </div>
  </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBoxListGlobal);
