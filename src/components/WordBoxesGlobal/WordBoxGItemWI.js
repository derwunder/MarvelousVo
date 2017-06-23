import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import {ListItem, Subheader, Divider, Avatar} from 'material-ui';
import {Paper,IconButton,Checkbox,Chip} from 'material-ui';
import {blue300, indigo900} from 'material-ui/styles/colors';


import wordBoxAPI from '../../api/wordBoxAPI';

class WordBoxGItemWI extends Component {
  constructor(props) {
   super(props);
   this.state = {
     disp: 'none'
    };
      var {dispatch} = this.props;
      this.handlerDisp=this.handlerDisp.bind(this);

  }

  handlerDisp (){
    if(this.state.disp==='none')
      this.setState({disp:''});
    else
      this.setState({disp:'none'});
  }

  render() {
    
    return (<div>
      <ListItem hoverColor={'#rgba(255, 255, 255, 0.1)'} style={{cursor:'default'}}
        rightIcon={<div>
          <IconButton style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
            <i style={{margin:'5px'}} className={this.props.item.bookmark?"material-icons md-dark md-active":"material-icons md-dark"}>bookmark</i>
          </IconButton>
          <IconButton  onTouchTap={this.handlerDisp} style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
            <i style={{margin:'5px'}} className="material-icons md-dark">{
              this.state.disp==='none'?'arrow_drop_down':'arrow_drop_up'
            }</i>
          </IconButton>
        </div>
        }>
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
        <Subheader style={{ display:this.props.item.tags[0]['tag']!==''?this.state.disp:'none'}}><i style={{margin:'5px'}}
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
) (WordBoxGItemWI);
