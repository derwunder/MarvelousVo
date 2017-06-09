import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import {List,Subheader,Divider} from 'material-ui';
import {checkIfWordBoxExist} from '../../actions/ActWordBox';
import WordItem from './WordItem';
import WordItemAdd from './WordItemAdd';
import wordBoxAPI from '../../api/wordBoxAPI';

class WordItemList extends Component {
  constructor(props) {
   super(props);
      var {dispatch} = this.props;
      //dispatch(checkIfWordBoxExist(this.props.wordListN));
      //this.mapTp1= this.mapTp1.bind(this);
  }

  mapTp1 = (oB) =>  {
  return  wordBoxAPI.filterWords(oB).map((item,index)=>{
      return <div key={item.id} ><WordItem wordBoxId={this.props.wordListN} item={item}/><Divider/> </div>
    });
  };

  mapTp2 = (oB) => {
    return  wordBoxAPI.filterWords(oB).map((item,index)=>{
        return <div key={item.id} ><WordItem wordBoxId={item.idWB} item={item}/><Divider/> </div>
      });
  };

  render() {
    var {wordBoxesReducer}=this.props;
    var oB =[],idWB=[];
    if(this.props.type===1){
      wordBoxesReducer.map(item=>{
        if(item.id===this.props.wordListN){
          item.hasOwnProperty('words')?
            oB=item.words:oB=[];
        }
        return item;
      });
    }else if(this.props.type===2){
      wordBoxesReducer.map(item=>{
        if(item.hasOwnProperty('words')){
            (item.words).map(wd=>{
              oB.push({idWB:item.id,...wd})
            });
        }
        return item;
      });
    }


    return (<div>
        <List>

          {this.props.type===1?this.mapTp1(oB):this.props.type===2?this.mapTp2(oB):<div/>}

        </List>
        {this.props.type===1?<WordItemAdd wordBoxId={this.props.wordListN}/>:<div/>}

      </div>

    );
  }
}
export default connect(
  (state) => {
    return state;
  }
) (WordItemList);
