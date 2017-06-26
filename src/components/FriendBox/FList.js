import React, { Component } from 'react';
import {connect} from 'react-redux';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {Subheader,Divider} from 'material-ui';
import Avatar from 'material-ui/Avatar';
import {pinkA200, teal400,transparent} from 'material-ui/styles/colors';

import wordBoxAPI from '../../api/wordBoxAPI';

//import FAdd from './FAdd';

class FList extends Component {
  componentWillMount(){

  }
  render() {
    var {regularReducer}=this.props;
    var searchTx= regularReducer.wbSearch;
    var mapFriends=(frList)=>{
      return wordBoxAPI.filterFriendList(frList,searchTx).map((fr,inx)=>{
        return(
          <ListItem key={inx+fr.id}
            leftAvatar={<Avatar src={fr.frPhoto} />}
            primaryText={fr.frName}
            secondaryText= {<span style={{color:teal400}}>{fr.frEmail}</span>}

            insetChildren={true}

          />
        );
      });
    };
    return (<div style={{textAlign:'center'}}>
      <Subheader>Friend List{(regularReducer.friendList).length===0&&" Empty"}</Subheader>
      <List style={{maxWidth:400,minWidth:300, textAlign:'justify', display:'inline-block'}}>
        {mapFriends(regularReducer.friendList)}
    </List>
  </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(FList);
