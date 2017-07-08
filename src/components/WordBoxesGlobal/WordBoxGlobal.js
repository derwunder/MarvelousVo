import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import {MenuItem,IconMenu,IconButton, Badge,Divider,Avatar} from 'material-ui';

import {startWordBoxUpdate} from '../../actions/ActWordBox';


import moment from 'moment';

class WordBoxGlobal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillReceiveProps(nextProps) {
  /*  if(nextProps.item.favorite !== this.props.item.favorite ||
      nextProps.item.fBoard !== this.props.item.fBoard ||
      nextProps.item.gBoard !== this.props.item.gBoard
    ) {
      this.setState({valueMultiple:  [
        nextProps.item.favorite?'1':'', nextProps.item.fBoard?'2':'', nextProps.item.gBoard?'3':''
      ]});
    }  */

  }



  render() {
    var {dispatch,regularReducer}=this.props;
    //moment(tm).format("MMM Do YYYY")   format readable
    //var lastCheckSTR =moment(this.props.item.createdAt).from(moment());
    //var lastCheck =moment().diff(this.props.item.lastCheckedAt,"days");

    var imgOnline ="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FhomeBox%2Fhoy549.jpg?alt=media&token=4bab98d9-1ec1-48b6-b6e2-02544cb8dbc0";
    return (
      <div  className="h">
        <Card style={{width:145, margin:5}}>

          <Link style={{textDecoration:'none'}} to={"/GlobalBoard/"+this.props.id} >
          {this.props.pic ?
            <CardMedia style={{borderRadius:5}}>
              <img alt="i-te" style={{maxWidth:130,borderRadius:5}}
                src={imgOnline} />
            </CardMedia>
            : <div/>
          }

            <CardTitle style={{padding:5, overflow:'hidden',textOverflow:'ellipsis', maxHeight:72}}
              title={(this.props.item.boxName).charAt(0).toUpperCase() + ((this.props.item.boxName).substring(0,20)).slice(1)

            } />
          </Link>

          <div style={{marginLeft:5,marginRight:10}}>
            <p style={{overflowX:'hidden',textOverflow:'ellipsis',color:'rgba(0, 0, 0, 0.7)',width:90, margin:5,fontSize:14,display:'inline-block'}}>
               <strong>{this.props.item.creatorName}</strong></p>
               <Avatar src={this.props.item.creatorAvatar} size={30}/>
          </div>
          <div style={{marginLeft:5,marginRight:10}}>
              <p style={{color:'rgba(0, 0, 0, 0.7)',width:95, margin:5,fontSize:13,display:'inline-block',verticalAlign:'top'}}>
                {this.props.item.words?(this.props.item.words).length:0} Words
              </p>
              <i style={{display:'inline-block'}}
                 className={"material-icons md-18 md-dark"} aria-hidden="true">list</i>
          </div>

          <div style={{marginLeft:5,marginRight:10}}>
              <p style={{color:regularReducer.wbgSortBy==='downloadsCount'?
                'rgba(0, 137, 123, 1)':
                'rgba(0, 0, 0, 0.7)',width:95, margin:5,fontSize:13,display:'inline-block',verticalAlign:'top'}}>
                {this.props.downloads} Downloads
              </p>
              <i style={{display:'inline-block'}}
                 className={regularReducer.wbgSortBy==='downloadsCount'?
                 "material-icons md-18 md-dark md-active":
                 "material-icons md-18 md-dark"} aria-hidden="true">file_download</i>
          </div>

          <div style={{marginLeft:5,marginRight:10}}>
              <p style={{color:regularReducer.wbgSortBy==='likeCount'?
                'rgba(0, 137, 123, 1)':
                'rgba(0, 0, 0, 0.7)',width:95, margin:5,fontSize:13,display:'inline-block',verticalAlign:'top'}}>
                {this.props.likes} Likes
              </p>
              <i style={{display:'inline-block'}}
                 className={regularReducer.wbgSortBy==='likeCount'?
                 "material-icons md-18 md-dark md-active":
                 "material-icons md-18 md-dark"} aria-hidden="true">thumb_up</i>
          </div>

          <div style={{marginLeft:5,marginRight:10, paddingBottom:15}}>
              <p style={{color:regularReducer.wbgSortBy==='wordbox/updatedAt'?
                'rgba(0, 137, 123, 1)':
                'rgba(0, 0, 0, 0.7)',width:95, margin:5,fontSize:13,display:'inline-block',verticalAlign:'top'}}>
                {moment(((this.props.item.updatedAt))).fromNow()}
              </p>
              <i style={{display:'inline-block'}}
                 className={regularReducer.wbgSortBy==='wordbox/updatedAt'?
                 "material-icons md-18 md-dark md-active":
                 "material-icons md-18 md-dark"} aria-hidden="true">update</i>
          </div>



          {/*}<p>CR: {moment(this.props.item.createdAt).format("MMM Do YYYY")} </p>*
            <CardActions style={{textAlign:'right'}}>
              {/*}<Badge style={{padding:11,margin:0,left:18,position:'absolute'}} badgeContent={4} primary={true}  />*
              <IconButton  style={{left:14,position:'absolute',width:30,height:30,marginRight:0,padding:0,border:0}}><i
                 className={"material-icons md-22 md-dark"} aria-hidden="true">assignment</i>
               </IconButton>

                 <IconMenu
                   anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                   targetOrigin={{horizontal: 'right', vertical: 'top'}}
                   iconButtonElement={
                     <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark">more_vert</i>
                     </IconButton>
                   }
                 >
                   <Divider/>
                   <MenuItem leftIcon={
                     <IconButton  style={{marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark md-24">edit</i>
                     </IconButton>
                   }
                   primaryText="Edit Word Box" />
                   <MenuItem leftIcon={
                     <IconButton  style={{marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark md-24">delete</i>
                     </IconButton>
                   }
                    primaryText="Delete Word Box" />
                 </IconMenu>

            </CardActions>*/}
        </Card>

      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBoxGlobal);
