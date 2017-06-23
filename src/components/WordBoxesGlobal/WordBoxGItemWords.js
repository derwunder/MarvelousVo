import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import {List, ListItem, Subheader,Chip, Avatar} from 'material-ui';
import {Paper} from 'material-ui';
import {teal300, teal700} from 'material-ui/styles/colors';


import WordBoxGItemWI from './WordBoxGItemWI';
import wordBoxAPI from '../../api/wordBoxAPI';

class WordBoxGItemWords extends Component {
  constructor(props) {
   super(props);
   this.state = {
     disp: 'none'
    };
      var {dispatch} = this.props;
      this.handlerDisp=this.handlerDisp.bind(this);
      //dispatch(checkIfWordBoxExist(this.props.wordListN));
      //this.mapTp1= this.mapTp1.bind(this);



  }


  handlerDisp (){
    if(this.state.disp==='none')
      this.setState({disp:''});
    else
      this.setState({disp:'none'});
  }

  wordItems = (words,bookmark,tSrch) =>  {
  return  wordBoxAPI.filterWordsGlobal(words,bookmark,tSrch).map((item,index)=>{

      return <WordBoxGItemWI key={item.id} item={item}/>

    });
  };



  render() {
    var {regularReducer}=this.props;
    var words=this.props.words;
    var tSrch=regularReducer.wbSearch;
    var bookmark= regularReducer.wiBookmark;


    return (
      <Paper zDepth={2} className="gwb_words"
         style={{textAlign:'justify',verticalAlign:'top',overflowY:'auto',display:'inline-block',margin:3}}>

        <Subheader style={{marginTop:15, marginRight:10}}>
          <Chip labelColor={'#fff'} labelStyle={{fontSize:20}} style={{marginRight:10}}
            backgroundColor={teal300}>
            <Avatar size={32} color={teal300} backgroundColor={teal700}>
              <i style={{margin:'2px'}} className="material-icons md-light md-22">list</i>
                    </Avatar>
                   Words
                  </Chip>
        </Subheader>
        <List>

          {this.wordItems(words,bookmark,tSrch)}

        </List>
      </Paper>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
) (WordBoxGItemWords);
