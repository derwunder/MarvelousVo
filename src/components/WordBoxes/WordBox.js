import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import {MenuItem,IconMenu,IconButton, Badge} from 'material-ui';

class WordBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChangeMultiple=this.handleChangeMultiple.bind(this);
  }
  handleChangeMultiple = (event, value) => {
      this.setState({
        valueMultiple: value,
      });
    };
  render() {
    return (
      <div  className="h">
        <Card style={{width:145, margin:5}}>

          {this.props.pic ?
            <CardMedia style={{borderRadius:5}}>
              <img alt="i-te" style={{maxWidth:130,borderRadius:5}} src="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FhomeBox%2Fhoy549.jpg?alt=media&token=4bab98d9-1ec1-48b6-b6e2-02544cb8dbc0" />
            </CardMedia>
          : <div/>
        }

            <CardTitle style={{padding:5}} title="Card title" />
            <CardActions style={{textAlign:'right'}}>
              {/*}<Badge style={{padding:11,margin:0,left:18,position:'absolute'}} badgeContent={4} primary={true}  />*/}
              <IconButton  style={{left:14,position:'absolute',width:30,height:30,marginRight:0,padding:0,border:0}}><i
                 className="material-icons md-22 md-dark md-active" aria-hidden="true">assignment</i>
               </IconButton>
               {/*}<IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                  className="material-icons md-24 md-dark md-active" aria-hidden="true">assignment</i>
                </IconButton>
                {/*}<IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                   className="material-icons md-24 md-dark" aria-hidden="true">supervisor_account</i>
                 </IconButton>
                <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                   className="material-icons md-24 md-dark" aria-hidden="true">language</i>
                 </IconButton>*/}
                 <IconMenu
                   anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                   targetOrigin={{horizontal: 'right', vertical: 'top'}}
                   iconButtonElement={
                     <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark">more_vert</i>
                     </IconButton>
                   }
                   onChange={this.handleChangeMultiple}
                   value={this.state.valueMultiple}
                   multiple={true}
                 >
                   <MenuItem leftIcon={
                     <IconButton  style={{marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark md-24">supervisor_account</i>
                     </IconButton>
                   } value="1" primaryText="Friend Post" />
                   <MenuItem leftIcon={
                     <IconButton  style={{marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark md-24">language</i>
                     </IconButton>
                   } value="2" primaryText="Global Post" />
                   <MenuItem leftIcon={
                     <IconButton  style={{marginRight:0,padding:0,border:0}}>
                       <i style={{margin:'5px'}} className="material-icons md-dark md-24">favorite</i>
                     </IconButton>
                   } value="3" primaryText="Favorite" />
                 </IconMenu>

            </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordBox);
