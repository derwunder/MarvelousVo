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
import W8GlobalMore from '../w8Dialogs/W8GlobalMore';
import {startDLGWordBoxesScroll,globalItemsNumber} from '../../actions/ActWordBox';



class WordBoxListGlobal extends Component {

  constructor(props) {
      super(props);
      this.state = {
        message:'not at bottom'
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
      var {dispatch, gWordBoxesReducer,regularReducer}=this.props;
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight && !regularReducer.numIGlobal &&
          regularReducer.wbgSortBy==='myPost' &&
          regularReducer.wbgSortBy==='fBoard') {
        dispatch(globalItemsNumber(true));
        var lastKey= gWordBoxesReducer[(gWordBoxesReducer.length)-1]['id'];
        var lastBN='';
        if(regularReducer.wbgSortBy==='wordbox/boxName'){
          lastBN=gWordBoxesReducer[(gWordBoxesReducer.length)-1]['wordbox']['boxName'];
        }
        else if(regularReducer.wbgSortBy==='wordbox/updatedAt'){
          lastBN=gWordBoxesReducer[(gWordBoxesReducer.length)-1]['wordbox']['updatedAt'];
        }
        else if(regularReducer.wbgSortBy==='likeCount'){
          lastBN=gWordBoxesReducer[(gWordBoxesReducer.length)-1]['likeCount'];
        }
        else if(regularReducer.wbgSortBy==='downloadsCount'){
          lastBN=gWordBoxesReducer[(gWordBoxesReducer.length)-1]['downloadsCount'];
        }



          console.log(lastKey);
        dispatch(startDLGWordBoxesScroll(lastBN,lastKey));
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
  var fName='',fAvat='';
if(this.props.fboard && gWordBoxesReducer.length>0){
  fName=gWordBoxesReducer[0]['wordbox']['creatorName'];
  fAvat=gWordBoxesReducer[0]['wordbox']['creatorAvatar'];
}

    var wordBoxesLoad = () =>{

      if(gWordBoxesReducer.length>0){
          var tp=this.props.type;
          var uid=authReducer.uid;
        return (
          wordBoxAPI.filterWordBoxesGlobal(gWordBoxesReducer,tp,wbSortBy,wbSearch).map((item,index)=>{
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
      <Subheader style={{marginTop:8}}>
        <Chip  style={{display:this.props.fboard?'flex':'none'}} labelColor={'#fff'} backgroundColor={teal300}>
          <Avatar  size={32} color={teal300} backgroundColor={teal700} src={fAvat}/>
            {this.props.fboard?fName:''}
        </Chip>
        <Chip style={{display:this.props.fboard?'none':'flex'}}  labelColor={'#fff'}
          backgroundColor={teal300}>
          <Avatar size={32} color={teal300} backgroundColor={teal700}>
            <i style={{margin:'2px'}} className="material-icons md-light md-22">
              {   (regularReducer.wbgSortBy==='wordbox/boxName')?'sort_by_alpha':
                            (regularReducer.wbgSortBy==='likeCount')?'thumb_up':
                              (regularReducer.wbgSortBy==='downloadsCount')?'file_download':
                                (regularReducer.wbgSortBy==='wordbox/updatedAt')?'update':
                                  (regularReducer.wbgSortBy==='myPost')?'face':
                                    (regularReducer.wbgSortBy==='fBoard')?'supervisor_account':''}
              </i>
                  </Avatar>
                  { (regularReducer.wbgSortBy==='wordbox/boxName')?'World Boxes':
                                (regularReducer.wbgSortBy==='likeCount')?'Most likes':
                                  (regularReducer.wbgSortBy==='downloadsCount')?'Most Downloads':
                                    (regularReducer.wbgSortBy==='wordbox/updatedAt')?'Recent Updates':
                                  (regularReducer.wbgSortBy==='myPost')?'My Posts':
                                (regularReducer.wbgSortBy==='fBoard')?'Friend Posts':''}
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
    <div  style={{display:regularReducer.w8GlobalMore?'':'none',
      position:'relative',zIndex:20,
      bottom:0,textAlign:'center',
      margin:'0 auto',marginTop:15,marginBottom:15}}><W8GlobalMore/></div>


  </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBoxListGlobal);
