import React, { Component } from 'react';
import {connect} from 'react-redux';

import {List, ListItem} from 'material-ui/List';
import {Subheader,Divider,IconButton,RaisedButton} from 'material-ui';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Avatar from 'material-ui/Avatar';
import {pinkA200, teal400, transparent} from 'material-ui/styles/colors';

import moment from 'moment';
import {confirmFriendRequest,deniedFriendRequest} from '../../actions/ActUserBox';
//import FAdd from './FAdd';

class frequest extends Component {
  componentWillMount(){

  }
  render() {
    var {regularReducer}=this.props;
    var mapFReqLT = (fReqLT) =>{
      return (fReqLT.map(frLT=>{
        return (<div key={frLT.reqUid}>
          <ListItem  hoverColor={'#rgba(255, 255, 255, 0.1)'} innerDivStyle={{paddingLeft:82,paddingRight:12}}
            primaryText={frLT.reqUName}
            secondaryText={<p>
              {<span>{frLT.reqUEmail}</span>}<br />
              {<span style={{color:teal400}}>{moment(frLT.reqUTime).fromNow()}</span>}
            </p>}
            secondaryTextLines={2}
            leftAvatar={<Avatar size={64} src={frLT.reqUPhoto} />}

          >
            <div style={{minWidth:206}}>
              <RaisedButton style={{display:'inline-flex',margin:5,marginBottom:10}}
                label="Confirm"
                primary={true}
                keyboardFocused={true}
                onTouchTap={()=>{var {dispatch}=this.props;
                  dispatch(confirmFriendRequest(frLT));
                 }}
              />
              <RaisedButton style={{display:'inline-flex',margin:5,marginBottom:10}}
                label="Delete"
                onTouchTap={()=>{var {dispatch}=this.props;
                  dispatch(deniedFriendRequest(frLT.reqUid));
               }}
              />
              {/*<IconButton style={{display:'inline-block',margin:0,padding:0,width:30,height:30}}
              onTouchTap={()=>{}}>
              <i className="material-icons md-24 md-dark" >check_circle</i>
             </IconButton>
             <IconButton style={{display:'inline-block',margin:0,padding:0,width:30,height:30}}
               onTouchTap={()=>{}}>
               <i className="material-icons md-24 md-dark" >cancel</i>
             </IconButton>*/}
           </div>
          </ListItem>
          <Divider/>
        </div>
        );
      }));
    };
    return (<div style={{textAlign:'center'}}>
        <Subheader>{(regularReducer.friendReq).length===0&&"No "}Friend Request</Subheader>

      <List style={{maxWidth:400,minWidth:300, textAlign:'justify', display:'inline-block'}}>

        {mapFReqLT(regularReducer.friendReq)}
    </List>
  </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(frequest);
