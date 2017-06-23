import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import {List, ListItem, Subheader,Chip, Avatar} from 'material-ui';
import {Paper,TextField,RaisedButton,FlatButton} from 'material-ui';
import {teal300, teal700} from 'material-ui/styles/colors';

import moment from 'moment';

import WordBoxGItemCI from './WordBoxGItemCI';
import wordBoxAPI from '../../api/wordBoxAPI';
import {commentGlobalWordBox} from '../../actions/ActWordBox';

class WordBoxGItemComments extends Component {
  constructor(props) {
   super(props);
   this.state = {
     comment: false,
     postComment:''
    };
      var {dispatch} = this.props;

      //dispatch(checkIfWordBoxExist(this.props.wordListN));
      //this.mapTp1= this.mapTp1.bind(this);
      this.handlePostComment=this.handlePostComment.bind(this);
      this.handleCancelComment=this.handleCancelComment.bind(this);
  }

  handlePostComment () {
    var {dispatch, authReducer}=this.props;
    if(this.state.postComment!==''){
      var newComment ={
        commetBy:authReducer.uid,
        commentUAvatar:authReducer.photoURL,
        commentUName:authReducer.displayName,
        commentTime:moment().valueOf(),
        comment:this.state.postComment
      };
      dispatch(commentGlobalWordBox(this.props.idWBG,newComment));
  }
    this.setState({postComment:''});
    this.setState({comment:false});
  }
  handleCancelComment (){
    this.setState({postComment:''});
    this.setState({comment:false});
  }



  commentItems = (comments,tSrch) =>  {
  return  wordBoxAPI.filterWBGComments(comments,tSrch).map((item,index)=>{

      return <WordBoxGItemCI key={item.id} item={item} idWBG={this.props.idWBG}/>

    });
  };



  render() {
    var {regularReducer,authReducer}=this.props;
    var comments=this.props.comments;
    var tSrch=regularReducer.wbSearch;
    //var bookmark= regularReducer.wiBookmark;


    return (
      <Paper zDepth={2} className="gwb_comments"
         style={{textAlign:'justify',verticalAlign:'top',overflowY:'auto',display:'inline-block',margin:5}}>

        <Subheader style={{marginTop:15, marginRight:10}}>
          <Chip labelColor={'#fff'} labelStyle={{fontSize:20}} style={{marginRight:10}}
            backgroundColor={teal300}>
            <Avatar size={32} color={teal300} backgroundColor={teal700}>
              <i style={{margin:'2px'}} className="material-icons md-light md-22">comment</i>
                    </Avatar>
                   Comments
                  </Chip>
        </Subheader>
        <div style={{marginTop:15}}>
            <Avatar
              style={{display:'inline-block',
                      width:40,height:40,
                      margin:7,marginRight:16,marginLeft:16,padding:0,border:0}}
              src={authReducer.photoURL}
             />

          <TextField style={{display:'inline-block', verticalAlign:'top',width:'65%'}}
            hintText="Comment here..." //underlineStyle={{borderColor:'#EEEEEE'}} underlineFocusStyle={{borderColor:'#EEEEEE'}}
            onChange={(e)=>{this.setState({postComment:e.target.value})}} multiLine={true} rowsMax={4}
            value={this.state.postComment}
            //ref={(input) => { this.commentInput = input; }}
             onFocus={()=>{this.setState({comment:true})}} //onBlur={()=>{}}
          />
          <div style={{display:this.state.comment?'block':'none', verticalAlign:'top', marginRight:10, textAlign:'right'}}>
            <FlatButton
              label="Cancel"
              onTouchTap={this.handleCancelComment }  />
            <RaisedButton
              label="Commet" primary={true}
              onTouchTap={this.handlePostComment }  />
          </div>
        </div>
        <List>
          {this.commentItems(comments,tSrch)}

        </List>
      </Paper>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
) (WordBoxGItemComments);
