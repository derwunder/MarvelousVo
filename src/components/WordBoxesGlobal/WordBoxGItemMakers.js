import React, { Component } from 'react';
import {connect} from 'react-redux';

//import '../css/home.css';
import {Card,CardText} from 'material-ui/Card';
import {Avatar,Subheader,IconButton} from 'material-ui';
import {teal300, teal700} from 'material-ui/styles/colors';


class WordBoxGItemMakers extends Component {
  constructor(props) {
   super(props);
   this.state = {
    };
      var {dispatch} = this.props;
      //dispatch(checkIfWordBoxExist(this.props.wordListN));
      //this.mapTp1= this.mapTp1.bind(this);
  }

  mapMaker=(itemmaker)=>{
    const mkLen = itemmaker.length;
    return  itemmaker.map((mk,inx)=>{
        return (<div key={inx+mk.makerUID} style={{display:'inline-flex',marginRight:7}}>
          <IconButton style={{margin:0,padding:0}} tooltip={mk.makerName} touch={true} tooltipPosition="bottom-right">
          <Avatar src={mk.makerAvatar} size={36}/></IconButton>
        </div>);
      });
    };

  render() {
    return (<div style={{textAlign:'left'}}>
        {(this.props.makers).length>0&&<Subheader style={{color:teal700, fontSize:14}}>Makers</Subheader>}
          {this.mapMaker(this.props.makers)}
    </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
) (WordBoxGItemMakers);
