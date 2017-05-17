import React, { Component } from 'react';

//import '../css/home.css';
import '../css/wordbox.css';
import WordBoxList from '../components/WordBoxes/WordBoxList';

import {Subheader,Divider, Chip,Avatar} from 'material-ui';
import {teal300, teal700} from 'material-ui/styles/colors';

class MyLearning extends Component {
  constructor(props) {
   super(props);
 }


  render() {
    return (
      <div>
        <Subheader style={{marginTop:8}}>
          <Chip labelColor={'#fff'}
            backgroundColor={teal300}>
            <Avatar size={32} color={teal300} backgroundColor={teal700}>
              <i style={{margin:'2px'}} className="fa fa-graduation-cap material-icons md-light md-18"></i>
                    </Avatar>
                    Words
                  </Chip>
        </Subheader>
        <WordBoxList/>
        <Subheader style={{marginTop:8}}>
          <Chip labelColor={'#fff'}
            backgroundColor={teal300}>
            <Avatar size={32} color={teal300} backgroundColor={teal700}>
              <i style={{margin:'2px'}} className="fa fa-users material-icons md-light md-18"></i>
                    </Avatar>
                    Idioms
                  </Chip>
        </Subheader>
        <WordBoxList/>

      </div>
    );
  }
}
export default MyLearning;
