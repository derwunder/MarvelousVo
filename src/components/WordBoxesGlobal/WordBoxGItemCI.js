import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import {List,ListItem, Subheader, Divider, Avatar,TextField} from 'material-ui';
import {Paper,IconButton ,FlatButton,RaisedButton,Checkbox,Chip} from 'material-ui';
import {blue300, indigo900} from 'material-ui/styles/colors';

import {IconMenu, MenuItem} from 'material-ui';

import moment from 'moment';
import wordBoxAPI from '../../api/wordBoxAPI';

import {replyGlobalWordBox,deleteCommentGWB,deleteReplyGWB} from '../../actions/ActWordBox';

class WordBoxGItemCI extends Component {
  constructor(props) {
   super(props);
   this.state = {
     disp: 'none',
     reply: false,
     postReply:''
    };
      var {dispatch} = this.props;
      this.handlerDisp=this.handlerDisp.bind(this);
      this.handlePostReply=this.handlePostReply.bind(this);
      this.handleCancelReply=this.handleCancelReply.bind(this);

  }
  componentDidUpdate() {
    if (this.state.disp==='') {
    //  this.refs.composer.focus()
      this.replyInput.focus();
    }
  }
  handlePostReply () {
    var {dispatch, authReducer}=this.props;
    if(this.state.postReply!==''){
      var newReply ={
        replyBy:authReducer.uid,
        replyUAvatar:authReducer.photoURL,
        replyUName:authReducer.displayName,
        replyTime:moment().valueOf(),
        reply:this.state.postReply
      };
      dispatch(replyGlobalWordBox(this.props.idWBG,this.props.item.id,newReply));
    }
    this.setState({postReply:''});
    this.setState({reply:false});
    this.handlerDisp();
  }
  handleCancelReply (){
    this.setState({postReply:''});
    this.setState({reply:false});
    this.handlerDisp();
  }

  handlerDisp (){
    if(this.state.disp==='none')
      this.setState({disp:''});
    else
      this.setState({disp:'none'});
  }

  replyItems = (replys) =>  {
    var {dispatch,authReducer}=this.props;
  return wordBoxAPI.filterWBGReplys(replys).map((item,index)=>{
      return (
        <ListItem hoverColor={'#rgba(255, 255, 255, 0.1)'} key={item.id}
          leftAvatar={<div><Avatar size={30} src={item.replyUAvatar} />
          <IconMenu style={{display:item.replyBy===authReducer.uid?'block':'none'}}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            listStyle={{}}
            iconButtonElement={
              <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                <i style={{margin:'5px'}} className="material-icons md-dark">keyboard_arrow_down</i>
              </IconButton>
            }
          >
            <MenuItem  onTouchTap={ ()=>{dispatch(deleteReplyGWB(this.props.idWBG,this.props.item.id,item.id));} }  primaryText="Delete Reply" />
          </IconMenu></div>
        }
          >
            <p style={{color: '#111',margin:5}}>
              <strong>{item.replyUName+" "}</strong>
              <span style={{color: '#777'}}>{moment(item.replyTime).fromNow()}</span>
            </p>
            <p style={{margin:5}} >
              {item.reply}
            </p>

        </ListItem>
      );

    });
  };

  render() {
    var {dispatch,authReducer}=this.props;
    var replys=[];

    if(this.props.item.hasOwnProperty('replys'))
      replys=this.props.item.replys;
    return (<div>
      <ListItem hoverColor={'#rgba(255, 255, 255, 0.1)'}
        leftAvatar={<div>
          <Avatar src={this.props.item.commentUAvatar} />
        <IconMenu style={{display:this.props.item.commetBy===authReducer.uid?'block':'none'}}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          listStyle={{}}
          iconButtonElement={
            <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
              <i style={{margin:'5px'}} className="material-icons md-dark">keyboard_arrow_down</i>
            </IconButton>
          }
        >
          <MenuItem  onTouchTap={ ()=>{ dispatch(deleteCommentGWB(this.props.idWBG,this.props.item.id));} }  primaryText="Delete Comment" />
        </IconMenu>
      </div>
      }

        >
          <p style={{color: '#111',margin:5}}>
            <strong>{this.props.item.commentUName+" "}</strong>
            <span style={{color: '#777'}}>{moment(this.props.item.commentTime).fromNow()}</span>
          </p>
          <p style={{margin:5}} >
            {this.props.item.comment}
          </p>
          <FlatButton label="Reply" primary={true} onTouchTap={this.handlerDisp} />

          <div style={{marginTop:15 , display:this.state.disp}}>
              <Avatar
                style={{display:'inline-block',
                        width:40,height:40,
                        margin:7,marginRight:16,marginLeft:16,padding:0,border:0}}
                src={authReducer.photoURL}
               />

            <TextField style={{display:'inline-block', verticalAlign:'top',width:'65%'}}
              hintText="Reply here..." //underlineStyle={{borderColor:'#EEEEEE'}} underlineFocusStyle={{borderColor:'#EEEEEE'}}
              onChange={(e)=>{this.setState({postReply:e.target.value})}} multiLine={true} rowsMax={4}
              value={this.state.postReply}
              ref={(input) => { this.replyInput = input; }}
               onFocus={()=>{this.setState({reply:true})}} //onBlur={()=>{}}
            />
            <div style={{display:this.state.reply?'block':'none', verticalAlign:'top', marginRight:10, textAlign:'right'}}>
              <FlatButton
                label="Cancel"
                onTouchTap={this.handleCancelReply }  />
              <RaisedButton
                label="Reply" primary={true}
                onTouchTap={this.handlePostReply }  />
            </div>
          </div>

          <List>
            {this.replyItems(replys)}
          </List>

      </ListItem>
      <Divider/>
    </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
) (WordBoxGItemCI);
