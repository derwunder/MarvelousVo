import React, { Component } from 'react';
import {connect} from 'react-redux';

import WordBoxGlobal from './WordBoxGlobal';
import '../../css/wordbox.css';
//import RecipeItem from './RecipeItem';
//import recipeAPI from '../../api/recipeAPI';

import {Subheader,Chip, Avatar} from 'material-ui';
import {teal300, teal700 } from 'material-ui/styles/colors';


import StackGrid, { transitions } from "react-stack-grid";
const { scaleDown } = transitions;

import wordBoxAPI from '../../api/wordBoxAPI';

import W8Global from '../w8Dialogs/W8Global';



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


var {gWordBoxesReducer, authReducer,regularReducer}=this.props;
var {wbFavorite,wbFBoard,wbGBoard,wbSearch,wbSortBy} =this.props.regularReducer;
//console.log(wbFavorite);

    var wordBoxesLoad = () =>{

      if(gWordBoxesReducer.length>0){
          var tp=this.props.type;
          var uid=authReducer.uid;
        return (
          wordBoxAPI.filterWordBoxesGlobal(gWordBoxesReducer,tp,uid).map((item,index)=>{
            var gWBDls=0,gWBLks=0;
            item.hasOwnProperty('downloads')?gWBDls=Object.keys(item.downloads).length:gWBDls=0;
            item.hasOwnProperty('like')?gWBLks=Object.keys(item.like).length:gWBLks=0;
            if(item.hasOwnProperty('id'))
            return <div key={"gKey"+index}>
              <WordBoxGlobal pic={value2} item={item.wordbox} likes={gWBLks} downloads={gWBDls} id={item.id}/></div>
          })
        );
      }
    };

    var value =true;var value2 =false;
    return (<div>
      <Subheader style={{marginTop:8,display:regularReducer.w8Global?'none':''}}>
        <Chip labelColor={'#fff'}
          backgroundColor={teal300}>
          <Avatar size={32} color={teal300} backgroundColor={teal700}>
            <i style={{margin:'2px'}} className="material-icons md-light md-22">
              {(regularReducer.wbgSortBy==='wordbox/boxName')?'sort_by_alpha':
                            (regularReducer.wbgSortBy==='likeCount')?'thumb_up':
                              (regularReducer.wbgSortBy==='downloadsCount')?'file_download':
                                (regularReducer.wbgSortBy==='wordbox/updatedAt')?'update':
                              (regularReducer.wbgSortBy==='myPost')?'face':''}
              </i>
                  </Avatar>
                  {(regularReducer.wbgSortBy==='wordbox/boxName')?'World Boxes':
                                (regularReducer.wbgSortBy==='likeCount')?'Most likes':
                                  (regularReducer.wbgSortBy==='downloadsCount')?'Most Downloads':
                                    (regularReducer.wbgSortBy==='wordbox/updatedAt')?'Recent Updates':
                                  (regularReducer.wbgSortBy==='myPost')?'My Posts':''}
                </Chip>
      </Subheader>
      <div  style={{display:regularReducer.w8Global?'':'none',
        position:'absolute',width:'100px',zIndex:20,
        top:'50%',left:0,right:0,bottom:0,
        margin:'0 auto'}}><W8Global/></div>
      <StackGrid style={{display:regularReducer.w8Global?'none':''}}
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
