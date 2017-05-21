import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FloatingActionButton} from 'material-ui';

class WordBoxAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{height:75}}>
        <FloatingActionButton style={{position:'fixed',bottom:10,right:10,zIndex:2}}>
          <i className="material-icons md-24 md-light " aria-hidden="true">add</i>
    </FloatingActionButton>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBoxAdd);
