import React, { Component } from 'react';

//import '../css/home.css';
import '../css/wordbox.css';
import WordBox from '../components/WordBoxes/WordBox';
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

class WordBoxes extends Component {
  render() {
    var value =true;var value2 =false;
    return (
      <div>
        <StackGrid
        columnWidth={150}
        monitorImagesLoaded={true} //this props helps monitorin images load - help height size
        appear={scaleDown.appear}
       appeared={scaleDown.appeared}
       enter={scaleDown.enter}
       entered={scaleDown.entered}
       leaved={scaleDown.leaved}
      >
        <div key="key1" >
          <WordBox  pic={value}/>
        </div>
        <div key="key2">
          <WordBox  pic={value2}/>
        </div>
        <div key="key3" >
          <WordBox  pic={value}/>
        </div>
        <div key="key4" >
          <WordBox  pic={value}/>
        </div>
        <div key="key5" >
          <WordBox  pic={value2}/>
        </div>
        <div key="key6" >
          <WordBox  pic={value}/>
        </div>
        <div key="key7" > {/*style={{display:'inline-block',verticalAlign:'top'}}*/}
          <WordBox  pic={value2}/>
        </div>
      </StackGrid>



      </div>
    );
  }
}
export default WordBoxes;
