import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import {List,Subheader,Divider} from 'material-ui';
import {checkIfWordBoxExist} from '../../actions/ActWordBox';
import WordItem from './WordItem';
import WordItemAdd from './WordItemAdd';


class WordItemList extends Component {
  constructor(props) {
   super(props);
      var {dispatch} = this.props;
      //dispatch(checkIfWordBoxExist(this.props.wordListN));
  }

  render() {
    var {wordBoxesReducer}=this.props;
    var oB =[];
    wordBoxesReducer.map(item=>{
      if(item.id===this.props.wordListN){
        item.hasOwnProperty('words')?
          oB=item.words:oB=[];
      }
      return item;
    });

    return (<div>
        <List>
          <Subheader>Start {" "+this.props.wordListN}</Subheader>
          {oB.map((item,index)=>{
            return <div key={item.id} ><WordItem wordBoxId={this.props.wordListN} item={item}/><Divider/> </div>
          })}

        </List>
        <WordItemAdd wordBoxId={this.props.wordListN}/>
      </div>

    );
  }
}
export default connect(
  (state) => {
    return state;
  }
) (WordItemList);
