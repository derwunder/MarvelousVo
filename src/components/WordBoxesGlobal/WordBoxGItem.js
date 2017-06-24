import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import {Card,CardText, CardActions, CardMedia, CardTitle,CardHeader} from 'material-ui/Card';
import {List,ListItem,Subheader,Divider,FloatingActionButton, Chip, Avatar,Paper,Dialog,FlatButton} from 'material-ui';
import {teal300, teal700} from 'material-ui/styles/colors';

import {IconButton, TextField,RaisedButton} from 'material-ui';

import {checkIfWordBoxExist,startLikeWordBox,startDLGWordBox} from '../../actions/ActWordBox';
import WordBoxGItemWords from './WordBoxGItemWords';
import WordBoxGItemComments from './WordBoxGItemComments';
import WordBoxGItemMakers from './WordBoxGItemMakers';
import wordBoxAPI from '../../api/wordBoxAPI';

import moment from 'moment';

import '../../css/globalwordboxitem.css';

class WordBoxGItem extends Component {
  constructor(props) {
   super(props);
   this.state = {
     dlDialog:false,
     boxName:''
    };
      var {dispatch} = this.props;
      //dispatch(checkIfWordBoxExist(this.props.wordListN));
      //this.mapTp1= this.mapTp1.bind(this);
  }

  handledlDi =()=>{this.setState({dlDialog:!this.state.dlDialog})};
  handleDLGWB = () => {
    var {gWordBoxesReducer,dispatch}=this.props;
    var gItem=  gWordBoxesReducer.find(wb=>wb.id===this.props.wordboxId)  ;

    var words={};
    (gItem.wordbox.words).map(wd=>{
      words[wd.id] = {wordTerm:wd.wordTerm,bookmark:wd.bookmark,definitions:wd.definitions,translations:wd.translations,tags:wd.tags};
    });

    var makers=[];
    if((gItem.wordbox).hasOwnProperty('makers')){
      makers=gItem.wordbox.makers;
    }
    makers.push({makerUID:gItem.wordbox.createBy,makerName:gItem.wordbox.creatorName, makerAvatar:gItem.wordbox.creatorAvatar});
    var newWBCloud={
      boxName:this.state.boxName,
      favorite:false,
      fBoard:false,
      gBoard:false,
      words:words,
      makers:makers
    };
    var newWBLocal={
      boxName:this.state.boxName,
      favorite:false,
      fBoard:false,
      gBoard:false,
      words:gItem.wordbox.words,
      makers:makers
    }
    dispatch(startDLGWordBox(this.props.wordboxId,newWBCloud,newWBLocal));
    this.setState({dlDialog:!this.state.dlDialog});
  };



  render() {

    var {regularReducer}=this.props;

      var {dispatch,gWordBoxesReducer,authReducer}=this.props;
      var uid=authReducer.uid;
      var gItem, gWB=[], gWBMakers=[], gWBDls={}, gWBLike={},gWBDislike={},gWBWords=[], gWBComments=[];
      var likeStatus=false, dislikeStatus=false, downloadsStatus=false;
      if(gWordBoxesReducer.length>0){
        gItem=  gWordBoxesReducer.find(wb=>wb.id===this.props.wordboxId)  ;
        gWB=gItem.wordbox;

        if(gWB.hasOwnProperty('makers')){
          gWBMakers=gWB.makers; 
        }
        if(gItem.hasOwnProperty('downloads')){
          gWBDls=gItem.downloads; if((gItem.downloads).hasOwnProperty(uid)) downloadsStatus=true;
        }
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



      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handledlDi}
        />,
        <FlatButton
          label="Save"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleDLGWB}
        />,
      ];

    return (<div>
    <div  style={{textAlign:'center',margin:'auto',display:regularReducer.wbSearch===''?'block':'none'}}>
      <Card style={{margin:7, minWidth:310,width:'55%', display:'inline-block'}}>
        <CardHeader style={{textAlign:'justify',padding:5, marginLeft:10,marginTop:10}}
              title={<strong>{gWB.creatorName}</strong>}
              subtitle={<div><p style={{display:'inline-block'}}>Checked & Updated</p> <i style={{display:'inline-block'}}
                 className={"material-icons md-18 md-dark"} aria-hidden="true">check</i></div>}
              avatar={gWB.creatorAvatar}
            />
            <CardText style={{paddingTop:0}}>
              <WordBoxGItemMakers makers={gWBMakers}/>
            </CardText>
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
                      {Object.keys(gWBDls).length} Downloads</p>
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
               {uid!==gWB.createBy&&  <FloatingActionButton
                  mini={true} style={{margin:5}}
                  onTouchTap={this.handledlDi}
                  >
                    <i  className="material-icons md-20 md-light">cloud_download</i>
                </FloatingActionButton>}
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

    <Dialog contentStyle={{width:'95%',maxWidth:350,transform: 'translate(0px, 5px)',minHeight:140}}
            bodyStyle={{minHeight:140}}
            style={{minHeight:140,paddingTop:0}}
          repositionOnUpdate={true}
          autoDetectWindowHeight={false}
          title={"Save \""+gWB.boxName+"\" as"}
          actions={actions}
          modal={false}
          open={this.state.dlDialog}
        >
      <TextField style={{margin:5,width:'80%'}}
        hintText="Ej: Marvelous Box"  floatingLabelText="Box Name"
        value={this.state.boxName}
        onChange={(e)=>{ this.setState({boxName: e.target.value});}} />
    </Dialog>

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
