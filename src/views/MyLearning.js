import React, { Component } from 'react';

//import '../css/home.css';
import '../css/wordbox.css';
import WordBoxList from '../components/WordBoxes/WordBoxList';

import {Subheader,Divider, Chip,Avatar} from 'material-ui';
import {teal300, teal700} from 'material-ui/styles/colors';

import Head from '../components/HeadRoom/Head';

class MyLearning extends Component {
  constructor(props) {
   super(props);
 }


  render() {
    return (
      <div>
        <Head title={"My Learning"}/>
        <Subheader style={{marginTop:8}}>
          <Chip labelColor={'#fff'}
            backgroundColor={teal300}>
            <Avatar size={32} color={teal300} backgroundColor={teal700}>
              <i style={{margin:'2px'}} className="fa fa-hourglass-start material-icons md-light md-18"></i>
                    </Avatar>
                   Seen recently
                  </Chip>
        </Subheader>
        <WordBoxList type={2}/>
        <Subheader style={{marginTop:8}}>
          <Chip labelColor={'#fff'}
            backgroundColor={teal300}>
            <Avatar size={32} color={teal300} backgroundColor={teal700}>
              <i style={{margin:'2px'}} className="fa fa-hourglass-end material-icons md-light md-18"></i>
                    </Avatar>
                   Seen more than a week ago
                  </Chip>
        </Subheader>
        <WordBoxList type={3}/>

      </div>
    );
  }
}
export default MyLearning;
