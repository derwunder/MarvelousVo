import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import {Card, CardActions, CardMedia, CardTitle,CardHeader} from 'material-ui/Card';
import {List,ListItem,Subheader,Divider,FloatingActionButton, Chip, Avatar,Paper} from 'material-ui';
import {teal300, teal700} from 'material-ui/styles/colors';

import {IconButton, TextField,RaisedButton} from 'material-ui';

import {checkIfWordBoxExist,startLikeWordBox} from '../../actions/ActWordBox';
import WordBoxGItemWords from './WordBoxGItemWords';
import WordBoxGItemComments from './WordBoxGItemComments';
import wordBoxAPI from '../../api/wordBoxAPI';

import moment from 'moment';

import '../../css/globalwordboxitem.css';

class WordBoxGItem extends Component {
  constructor(props) {
   super(props);
   //this.state = {comment:false};
      var {dispatch} = this.props;
      //dispatch(checkIfWordBoxExist(this.props.wordListN));
      //this.mapTp1= this.mapTp1.bind(this);
  }

  /*mapTp1 = (oB,bookmark,tSrch) =>  {
  return  wordBoxAPI.filterWords(oB,bookmark,tSrch).map((item,index)=>{
      return <div key={item.id} ><WordItem wordBoxId={this.props.wordListN} item={item}/><Divider/> </div>
    });
  };

  mapTp2 = (oB,bookmark,tSrch) => {
    return  wordBoxAPI.filterWords(oB,bookmark,tSrch).map((item,index)=>{
        return <div key={item.id} ><WordItem wordBoxId={item.idWB} item={item}/><Divider/> </div>
      });
  };*/

  render() {
  /*  var {wordBoxesReducer,regularReducer}=this.props;
    var tSrch=regularReducer.wbSearch;
    var bookmark= regularReducer.wiBookmark;
    var oB =[],idWB=[];
    if(this.props.type===1){
      wordBoxesReducer.map(item=>{
        if(item.id===this.props.wordListN){
          item.hasOwnProperty('words')?
            oB=item.words:oB=[];
        }
        return item;
      });
    }else if(this.props.type===2){
      wordBoxesReducer.map(item=>{
        if(item.hasOwnProperty('words')){
            (item.words).map(wd=>{
              oB.push({idWB:item.id,...wd})
            });
        }
        return item;
      });
    }*/
    var {regularReducer}=this.props;

      var {dispatch,gWordBoxesReducer,authReducer}=this.props;
      var uid=authReducer.uid;
      var gItem, gWB=[], gWBLike={},gWBDislike={},gWBWords=[], gWBComments=[];
      var likeStatus=false, dislikeStatus=false;
      if(gWordBoxesReducer.length>0){
        gItem=  gWordBoxesReducer.find(wb=>wb.id===this.props.wordboxId)  ;
        gWB=gItem.wordbox;
        if(gItem.hasOwnProperty('like')){
          gWBLike=gItem.like; if((gItem.like).hasOwnProperty(uid)) likeStatus=true;
        }
        if(gItem.hasOwnProperty('dislike')){
          gWBDislike=gItem.dislike; if((gItem.dislike).hasOwnProperty(uid)) dislikeStatus=true;
        }
        if(gWB.hasOwnProperty('words')){
          gWBWords=gWB.words;
        }
        if(gItem.hasOwnProperty('comments')){
          gWBComments=gItem.comments;
        }
      }



    return (<div>
    <div  style={{textAlign:'center',margin:'auto',display:regularReducer.wbSearch===''?'block':'none'}}>
      <Card style={{margin:7, minWidth:310,width:'55%', display:'inline-block'}}>
        <CardHeader style={{textAlign:'justify',padding:5, marginLeft:10,marginTop:10}}
              title={<strong>{gWB.creatorName}</strong>}
              subtitle={<div><p style={{display:'inline-block'}}>Checked & Updated</p> <i style={{display:'inline-block'}}
                 className={"material-icons md-18 md-dark"} aria-hidden="true">check</i></div>}
              avatar={gWB.creatorAvatar}
            />
            <div>
              <div style={{textAlign:'justify',display:'inline-block', float:'left', marginLeft:10}}>
                <div style={{marginLeft:5,marginRight:10}}>
                  <i style={{display:'inline-block',marginRight:10}}
                    className={"material-icons md-18 md-dark"} aria-hidden="true">title</i>
                    <p style={{color:'rgba(0, 0, 0, 0.7)',maxWidth:145, margin:5,fontSize:14,display:'inline-block'}}>
                      <strong>{gWB.boxName}</strong></p>
                </div>
                <div style={{marginLeft:5,marginRight:10}}>
                <i style={{display:'inline-block',marginRight:10}}
                   className={"material-icons md-18 md-dark"} aria-hidden="true">list</i>
                    <p style={{color:'rgba(0, 0, 0, 0.7)',maxWidth:145, margin:5,fontSize:13,display:'inline-block',verticalAlign:'top'}}>
                      {gWB.words?(gWB.words).length:0} Words</p>
                </div>
                <div style={{marginLeft:5,marginRight:10}}>
                <i style={{display:'inline-block',marginRight:10}}
                   className={"material-icons md-18 md-dark"} aria-hidden="true">file_download</i>
                    <p style={{color:'rgba(0, 0, 0, 0.7)',maxWidth:145, margin:5,fontSize:13,display:'inline-block',verticalAlign:'top'}}>
                      0 Downloads</p>
                </div>
                <div style={{marginLeft:5,marginRight:10, paddingBottom:15}}>
                <i style={{display:'inline-block',marginRight:10}}
                   className={"material-icons md-18 md-dark"} aria-hidden="true">update</i>
                    <p style={{color:'rgba(0, 0, 0, 0.7)',maxWidth:145, margin:5,fontSize:13,display:'inline-block',verticalAlign:'top'}}>
                      {moment(gWB.updatedAt).fromNow()}</p>
                </div>
              </div>

              <div style={{ float:'right',
                textAlign:'right',display:'inline-block',verticalAlign:'top', marginRight:15}}>
                <FloatingActionButton
                  mini={true} style={{margin:5}}
                  onTouchTap={()=>{ }}
                  >
                    <i  className="material-icons md-20 md-light">cloud_download</i>
                </FloatingActionButton>
                <div style={{marginLeft:5,marginRight:10}}>
                  <p style={{color:'rgba(0, 0, 0, 0.7)',width:30, margin:5,fontSize:14,display:'inline-block'}}>
                     {Object.keys(gWBLike).length} </p>
                     <i style={{cursor:'pointer',display:'inline-block'}} onClick={()=>{dispatch(startLikeWordBox(this.props.wordboxId,'like'))}}
                        className={
                                likeStatus?"material-icons md-22 md-dark md-active"
                                :"material-icons md-22 md-dark"
                        } aria-hidden="true">thumb_up</i>
                </div>
                <div style={{marginLeft:5,marginRight:10}}>
                  <p style={{color:'rgba(0, 0, 0, 0.7)',width:30, margin:5,fontSize:14,display:'inline-block'}}>
                     {Object.keys(gWBDislike).length} </p>
                     <i style={{cursor:'pointer',display:'inline-block'}} onClick={()=>{dispatch(startLikeWordBox(this.props.wordboxId,'dislike'))}}
                        className={
                                dislikeStatus?"material-icons md-22 md-dark md-active"
                                :"material-icons md-22 md-dark"
                        } aria-hidden="true">thumb_down</i>
                </div>
              </div>
            </div>
      </Card>
    </div>

    <div style={{textAlign:'center'}}>
      <WordBoxGItemWords words={gWBWords} /> {/*hola*/}
      <WordBoxGItemComments idWBG={this.props.wordboxId} comments={gWBComments} />
    </div>


    <div style={{height:50}}></div>
    </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
) (WordBoxGItem);
