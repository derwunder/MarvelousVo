import React, { Component } from 'react';

//import '../css/home.css';
import {List,Subheader} from 'material-ui';

import WordItem from '../components/WordBoxes/WordItem';


class WordList extends Component {
  constructor(props) {
   super(props);
     this.state = {
       here: this.props.params.wordListN
      };
  }

  render() {
    return (
      <div>
        <List>
          <Subheader>Start {" "+this.state.here}</Subheader>
          <WordItem /><WordItem />
        </List>

      </div>
    );
  }
}
export default WordList;
