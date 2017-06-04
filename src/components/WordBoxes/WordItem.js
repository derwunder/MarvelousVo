import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import {List, ListItem, Subheader, Divider, Avatar} from 'material-ui';
import {Paper,IconButton,Checkbox,Chip} from 'material-ui';
import {blue300, indigo900} from 'material-ui/styles/colors';

import WordItemEdit from './WordItemEdit';
import WordItemDelete from './WordItemDelete';
import {startWordItemUpdate} from '../../actions/ActWordBox';

class WordItem extends Component {
  constructor(props) {
   super(props);
     this.state = {
       disp: 'none',
      wordItemEditor:false,
      wordItemEraser:false
      };
      this.handlerDisp=this.handlerDisp.bind(this);
      this.handleEditor=this.handleEditor.bind(this);
      this.handleBookMark=this.handleBookMark.bind(this);
      this.handleEraser= this.handleEraser.bind(this);
      console.log("word term: "+JSON.stringify(this.props.item));
  }
  handleBookMark (){
    var {dispatch}=this.props;
    var ob={bookmark:!this.props.item.bookmark};
    dispatch(startWordItemUpdate(this.props.wordBoxId,this.props.item.id,ob));
  }
  handleEraser(){
    this.setState({wordItemEraser: !this.state.wordItemEraser});
  }
  handleEditor () {
    this.setState({wordItemEditor: !this.state.wordItemEditor});
  }

  handlerDisp (){
    if(this.state.disp==='none')
      this.setState({disp:''});
    else
      this.setState({disp:'none'});
  }

  render() {
      var tagChecker = this.props.item.tags;
    return (
      <div>
          <ListItem hoverColor={'#fff'} style={{cursor:'default'}}
            rightIcon={<div>
              <IconButton onTouchTap={this.handleBookMark}  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                <i style={{margin:'5px'}} className={this.props.item.bookmark?"material-icons md-dark md-active":"material-icons md-dark"}>bookmark</i>
              </IconButton>
              <IconButton  style={{display:this.state.disp,width:30,height:30,marginRight:0,padding:0,border:0}}
                onTouchTap={this.handleEditor}>
                <i style={{margin:'5px'}} className="material-icons md-dark">edit</i>
              </IconButton>
              <IconButton  style={{display:this.state.disp,width:30,height:30,marginRight:0,padding:0,border:0}}
                onTouchTap={this.handleEraser}>
                <i style={{margin:'5px'}} className="material-icons md-dark">delete</i>
              </IconButton>
              <IconButton  onClick={this.handlerDisp} style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                <i style={{margin:'5px'}} className="material-icons md-dark">{
                  this.state.disp==='none'?'arrow_drop_down':'arrow_drop_up'
                }</i>
              </IconButton>
            </div>
            }
          //  leftAvatar={<Avatar src="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FhomeBox%2Fhoy549.jpg?alt=media&token=4bab98d9-1ec1-48b6-b6e2-02544cb8dbc0" />}
          >  {/*teal 600 para h3*/}
            <h3 onClick={this.handlerDisp} style={{cursor:'pointer',color:'#00897B',margin:0,padding:0}}>{this.props.item.wordTerm}</h3>

            <Subheader onClick={this.handlerDisp} style={{cursor:'pointer',display:this.state.disp}}><i style={{margin:'5px'}} className="material-icons md-18 md-dark">description</i>
              Definitions
            </Subheader>
            {(this.props.item).hasOwnProperty('definitions')&&
              (this.props.item.definitions).map((def,index)=>{
                //console.log("def "+index+": "+JSON.stringify(def));
                if(index===0){
                  return(<Paper key={"def"+index} onClick={this.handlerDisp} style={{cursor:'pointer',margin:5}}>
                    <p style={{margin:5,padding:0,display:'inline-block'}}>
                          <strong>{def.tp!==''?def.tp+":":''}</strong> {def.def!==''?def.def:'the definition is empty.'}
                    </p>
                  </Paper>);
                }else{
                  return(<Paper key={"def"+index}  style={{margin:5,display:this.state.disp}}>
                    <p style={{margin:5,padding:0,display:'inline-block'}}>
                          <strong>{def.tp!==''?def.tp+":":''}</strong> {def.def!==''?def.def:'the definition is empty.'}
                    </p>
                  </Paper>);
                }
              })
          }





            {(this.props.item).hasOwnProperty('translations')&&

              (this.props.item.translations).map((tr,index)=>{
                //console.log("lengthTR: "+(this.props.item.translations).length);
                var dispP='';
                if(tr.lan!==''||tr.tr!==''){dispP=this.state.disp}else{dispP='none'}
                if(index===0){
                  var dispSH='';
                  var lengthTr =(this.props.item.translations).length;
                  if(lengthTr>1||dispP!=='none'){dispSH=this.state.disp}else{dispSH='none'}

                  return(<div key={"tr"+index}>
                    <Subheader style={{ display:dispSH}}><i style={{margin:'5px'}} className="material-icons md-18 md-dark">g_translate</i>
                      Translations
                    </Subheader>
                    <Paper   style={{margin:5,display: dispP }}>
                    <p style={{margin:5,padding:0,display:'inline-block'}}>
                          <strong>{tr.lan!==''?tr.lan+":":'No language tagged:'}</strong> {tr.tr!==''?tr.tr:'Translation empty.'}
                    </p>
                  </Paper>
                </div>
                );
                }else{
                  return (
                    <Paper key={"tr"+index}  style={{margin:5,display: dispP }}>
                    <p style={{margin:5,padding:0,display:'inline-block'}}>
                          <strong>{tr.lan!==''?tr.lan+":":'No language tagged:'}</strong> {tr.tr!==''?tr.tr:'Translation empty.'}
                    </p>
                  </Paper>
                  );
                }
              })
          }


          <Subheader style={{ display:tagChecker[0]['tag']!==''?this.state.disp:'none'}}><i style={{margin:'5px'}}
            className="fa fa-tags material-icons md-18 md-dark"></i>
            Tags
          </Subheader>
          {(this.props.item).hasOwnProperty('tags')&&

            (this.props.item.tags).map((tag,index)=>{
              //console.log("lengthTR: "+(this.props.item.translations).length);
              var dispP='';
              if(tag.tag!==''){
                if(this.state.disp==='none')
                  dispP=this.state.disp;
                else
                  dispP='inline-flex';
              }else{dispP='none'}

              return (
                <Chip key={"tag"+index} style={{display:dispP, margin:5}}>
                  {tag.tag}</Chip>
              );

            })
        }



          {/*}  <div style={{ display:this.state.disp}}>
            <Subheader><i style={{margin:'5px'}} className="fa fa-tags md-18 material-icons md-dark"></i>
              Tags
            </Subheader>
            <Chip style={{display:'inline-block', margin:5}}>
              <Avatar size={20} color="#fff">
                <strong>#</strong>
              </Avatar>Word</Chip>
            <Chip style={{display:'inline-block', margin:5}}>
              <Avatar size={20} color={blue300} backgroundColor={indigo900}>
                <strong>#</strong>
              </Avatar>term</Chip>
            <Chip backgroundColor={blue300} labelColor="#FFF" style={{display:'inline-block', margin:5}}>
              <Avatar size={20} color={blue300} backgroundColor={indigo900}>
                <strong>#</strong>
              </Avatar>Learn</Chip>
              <Chip onRequestDelete={()=>{}} backgroundColor="#1DE9B6" labelColor="#FFF" style={{margin:5,display:'inline-flex'}}>
                <Avatar size={20} color="#1DE9B6" backgroundColor="#00BFA5">
                  <strong>#</strong>
                </Avatar>Learn</Chip>
        </div>*/}

          </ListItem>
          <WordItemEdit item={this.props.item}
            wordBoxId={this.props.wordBoxId}
            editor={this.state.wordItemEditor}
            handleEditor={this.handleEditor.bind(this)}
          />
          <WordItemDelete item={this.props.item}
            wordBoxId={this.props.wordBoxId}
            eraser={this.state.wordItemEraser}
            handleEraser={this.handleEraser.bind(this)}/>
        </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)  (WordItem);
