import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import {MenuItem,IconMenu,IconButton, Badge,Divider} from 'material-ui';
import {teal700,tealA200} from 'material-ui/styles/colors';

import WordBoxEdit from './WordBoxEdit';
import WordBoxDelete from './WordBoxDelete';
import {startWordBoxUpdate} from '../../actions/ActWordBox';


import moment from 'moment';

class WordBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueMultiple: [
        this.props.item.favorite?'1':'', this.props.item.gBoard?'2':''
      ],
      wordBoxEditor:false,
      wordBoxEraser:false
    };
    this.handleChangeMultiple=this.handleChangeMultiple.bind(this);
    this.handleEditor=this.handleEditor.bind(this);
    this.handleEraser=this.handleEraser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.item.favorite !== this.props.item.favorite ||
      nextProps.item.gBoard !== this.props.item.gBoard
    ) {
      this.setState({valueMultiple:  [
        nextProps.item.favorite?'1':'', nextProps.item.gBoard?'2':''
      ]});
    }

  }

  handleEraser (){
    this.setState({
      valueMultiple: [
        this.props.item.favorite?'1':'', this.props.item.gBoard?'2':''
      ]
    });
    this.setState({wordBoxEraser: !this.state.wordBoxEraser});
  }
  handleEditor (rFa,rGB) {
  /*  if(rFB!==undefined){
      this.setState({
        valueMultiple: [  rFa?'1':'', rFB?'2':'', rGB?'3':''
        ]
      });
    }else{*/
      this.setState({
        valueMultiple: [
          this.props.item.favorite?'1':'', this.props.item.gBoard?'2':''
        ]
      });
  //  }
    this.setState({wordBoxEditor: !this.state.wordBoxEditor});
  }

  handleChangeMultiple = (event, value) => {
      this.setState({
        valueMultiple: value,
      });
    };

checkedNow =()=>{
  var {dispatch}=this.props;
  var checker = moment().diff(this.props.item.lastCheckedAt,"days");
  if(checker>0){
    dispatch(startWordBoxUpdate(this.props.item.id,{lastCheckedAt:moment().valueOf()}));
  }
}

  render() {
    var {dispatch}=this.props;
    //moment(tm).format("MMM Do YYYY")   format readable
    //var lastCheckSTR =moment(this.props.item.createdAt).from(moment());
    var lastCheck =moment().diff(this.props.item.lastCheckedAt,"days");

    return (
      <div  className="h">
        <Card style={{width:145, margin:5}}>

          <Link style={{textDecoration:'none'}} to={"/WordBoxes/"+this.props.item.id} onClick={ this.checkedNow}>
          {this.props.pic ?
            <CardMedia style={{borderRadius:5}}>
              <img alt="i-te" style={{maxWidth:130,borderRadius:5}}
                src="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FhomeBox%2Fhoy549.jpg?alt=media&token=4bab98d9-1ec1-48b6-b6e2-02544cb8dbc0" />
            </CardMedia>
            : <div/>
          }

            <CardTitle style={{padding:5}} title={
              <span>
                {/*this.props.item.favorite?
                  <i style={{margin:5}} className=" material-icons md-18 md-dark md-active" aria-hidden="true">favorite</i>:<div/>*/ }

              {this.props.item.boxName}
              </span>
            } />
          </Link>

        {/*  <p>CR: {moment(this.props.item.createdAt).format("MMM Do YYYY")} </p>
          <p>LC: {moment(this.props.item.lastCheckedAt).format("MMM Do YYYY")} </p> */ }
          <div style={{marginLeft:0,marginRight:0, marginTop:5,marginBottom:5}}>
            <p style={{margin:0,fontSize:13,display:'inline-block',verticalAlign:'top',
              padding: 7,
               background: '#00796B',
               boxShadow: '1px 0px 3px 1px rgba(0, 105, 92, 0.5)',
               borderTopRightRadius: 10,
               borderBottomRightRadius: 10}}>

              <i style={{marginRight:10
              }}
               className={
                 this.props.item.favorite?"material-icons md-18 md-light":
                 "material-icons md-18 md-dark"
               } aria-hidden="true">favorite</i>

               <i style={{
               }}
                className={
                  this.props.item.gBoard?"material-icons md-18 md-light":
                  "material-icons md-18 md-dark"
                } aria-hidden="true">language</i>
            </p>
          </div>
          <div style={{marginLeft:5,marginRight:10}}>
              <p style={{color:'rgba(0, 0, 0, 0.7)',width:95, margin:5,fontSize:13,display:'inline-block',verticalAlign:'top'}}>
                {this.props.item.words?(this.props.item.words).length:0} Words
              </p>
              <i style={{display:'inline-block'}}
                 className={"material-icons md-18 md-dark"} aria-hidden="true">list</i>
          </div>
          <div style={{marginLeft:5,marginRight:10}}>
              <p style={{color:
                'rgba(0, 0, 0, 0.7)',width:95, margin:5,fontSize:13,display:'inline-block',verticalAlign:'top'}}>
                {moment(((this.props.item.lastCheckedAt))).fromNow()}
              </p>
              <i style={{display:'inline-block'}}
                 className={"material-icons md-18 md-dark"} aria-hidden="true">history</i>
          </div>


            <CardActions style={{textAlign:'right'}}>
              {/*}<Badge style={{padding:11,margin:0,left:18,position:'absolute'}} badgeContent={4} primary={true}  />*/}
              <IconButton  style={{left:14,position:'absolute',width:30,height:30,marginRight:0,padding:0,border:0}}><i
                onClick={ this.checkedNow}
                 className={
                   lastCheck<=7?"material-icons md-22 md-dark md-active":
                    lastCheck<=30?"material-icons md-22 md-dark md-active2":
                   "material-icons md-22 md-dark"
                 } aria-hidden="true">assignment</i>
               </IconButton>

                 <IconMenu
                   anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                   targetOrigin={{horizontal: 'right', vertical: 'top'}}
                   iconButtonElement={
                     <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark">more_vert</i>
                     </IconButton>
                   }
                   onChange={this.handleChangeMultiple}
                   value={this.state.valueMultiple}
                   multiple={true}
                 >
                   <MenuItem leftIcon={
                     <IconButton  style={{marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className={"material-icons md-dark md-24"}>favorite</i>
                     </IconButton>
                   } onClick ={()=>{
                   dispatch(startWordBoxUpdate(this.props.item.id,{favorite:!this.props.item.favorite}));}}
                   value="1" primaryText="Favorite" />
                   <MenuItem leftIcon={
                     <IconButton  style={{marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark md-24">language</i>
                     </IconButton>
                   } onClick ={()=>{
                   dispatch(startWordBoxUpdate(this.props.item.id,{gBoard:!this.props.item.gBoard}));}}
                   value="2" primaryText="Global Post" />
                   <Divider/>
                   <MenuItem leftIcon={
                     <IconButton  style={{marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark md-24">edit</i>
                     </IconButton>
                   } onClick={this.handleEditor}
                   value="4" primaryText="Edit Word Box" />
                   <MenuItem leftIcon={
                     <IconButton  style={{marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark md-24">delete</i>
                     </IconButton>
                   } onClick={this.handleEraser}
                   value="5" primaryText="Delete Word Box" />
                 </IconMenu>

            </CardActions>
        </Card>
        <WordBoxEdit item={this.props.item}
          editor={this.state.wordBoxEditor}
          handleEditor={this.handleEditor.bind(this)}
        />
        <WordBoxDelete item={this.props.item}
          eraser={this.state.wordBoxEraser}
          handleEraser={this.handleEraser.bind(this)}/>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBox);
