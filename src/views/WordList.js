import React, { Component } from 'react';

//import '../css/home.css';
import {List, ListItem, Subheader, Divider, Avatar} from 'material-ui';
import {Paper,IconButton,Checkbox,Chip} from 'material-ui';
import {blue300, indigo900} from 'material-ui/styles/colors';


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
          <Subheader>Start</Subheader>
          <ListItem
            rightIcon={<div>
              <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                <i style={{margin:'5px'}} className="material-icons md-dark">more_vert</i>
              </IconButton>
              <Checkbox
                checkedIcon={<i className="material-icons md-24 md-dark md-active" aria-hidden="true">bookmark</i>}
                uncheckedIcon={<i className="material-icons md-24 md-dark" aria-hidden="true">bookmark</i>}
              /></div>
            }
            leftAvatar={<Avatar src="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FhomeBox%2Fhoy549.jpg?alt=media&token=4bab98d9-1ec1-48b6-b6e2-02544cb8dbc0" />}
          >  {/*teal 600 para h3*/}
            <h3 style={{color:'#00897B',margin:0,padding:0}}>Word-term</h3>
            <Paper style={{margin:5}}>
              <p style={{margin:5,padding:0,display:'inline-block'}}>
                <strong>Def 1: </strong>This is def one, just testing and puting dummy text.</p></Paper>
            <Paper style={{margin:5}}>
              <p style={{margin:5,padding:0,display:'inline-block'}}>
                <strong>Def 2: </strong>This is def one, just testing and puting dummy text a second def.</p></Paper>
            <Paper style={{margin:5}}>
              <p style={{margin:5,padding:0,display:'inline-block'}}>
                <strong>Def 3: </strong>This is def one, just testing and puting dummy text, we can have as many as we need.</p></Paper>

            <Subheader><i style={{margin:'5px'}} className="material-icons md-18 md-dark">g_translate</i>
              Translations
            </Subheader>
            <Paper style={{margin:5}}>
              <p style={{margin:5,padding:0,display:'inline-block'}}><strong>Spn: </strong> Palbra-termino</p>
            </Paper>
            <Paper style={{margin:5}}>
              <p style={{margin:5,padding:0,display:'inline-block'}}><strong>Por: </strong> Palavra-termo</p>
            </Paper>
            <Subheader><i style={{margin:'5px'}} className="fa fa-tags md-18 material-icons md-dark"></i>
              Tags
            </Subheader>
            <Chip style={{display:'inline-block', margin:5}}>
              <Avatar size={20} color="#fff">
                <strong>#</strong>
              </Avatar>Word</Chip>
            <Chip style={{display:'inline-block', margin:5}}>
              <Avatar size={20} color={blue300} backgroundColor={indigo900}>
                <strong>#</strong>
              </Avatar>term</Chip>
            <Chip backgroundColor={blue300} style={{display:'inline-block', margin:5}}>
              <Avatar size={20} color={blue300} backgroundColor={indigo900}>
            <strong>#</strong>
          </Avatar>Learning</Chip>

          </ListItem>

          <ListItem
            rightIcon={<div>
              <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}>
                <i style={{margin:'5px'}} className="material-icons md-dark">more_vert</i>
              </IconButton>
              <Checkbox
                checkedIcon={<i className="material-icons md-24 md-dark md-active" aria-hidden="true">bookmark</i>}
                uncheckedIcon={<i className="material-icons md-24 md-dark" aria-hidden="true">bookmark</i>}
              /></div>
            }
            leftAvatar={<Avatar src="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FhomeBox%2Fhoy549.jpg?alt=media&token=4bab98d9-1ec1-48b6-b6e2-02544cb8dbc0" />}
          >  {/*teal 600 para h3*/}
            <h3 style={{color:'#00897B',margin:0,padding:0}}>Word-term</h3>
            <Paper style={{margin:5}}>
              <p style={{margin:5,padding:0,display:'inline-block'}}>
                <strong>Def 1: </strong>This is def one, just testing and puting dummy text.</p></Paper>
            <Paper style={{margin:5}}>
              <p style={{margin:5,padding:0,display:'inline-block'}}>
                <strong>Def 2: </strong>This is def one, just testing and puting dummy text a second def.</p></Paper>
            <Paper style={{margin:5}}>
              <p style={{margin:5,padding:0,display:'inline-block'}}>
                <strong>Def 3: </strong>This is def one, just testing and puting dummy text, we can have as many as we need.</p></Paper>

            <Subheader><i style={{margin:'5px'}} className="material-icons md-18 md-dark">g_translate</i>
              Translations
            </Subheader>
            <Paper style={{margin:5}}>
              <p style={{margin:5,padding:0,display:'inline-block'}}><strong>Spn: </strong> Palbra-termino</p>
            </Paper>
            <Paper style={{margin:5}}>
              <p style={{margin:5,padding:0,display:'inline-block'}}><strong>Por: </strong> Palavra-termo</p>
            </Paper>
            <Subheader><i style={{margin:'5px'}} className="fa fa-tags md-18 material-icons md-dark"></i>
              Tags
            </Subheader>
            <Chip style={{display:'inline-block', margin:5}}>
              <Avatar size={20} color="#fff">
                <strong>#</strong>
              </Avatar>Word</Chip>
            <Chip style={{display:'inline-block', margin:5}}>
              <Avatar size={20} color={blue300} backgroundColor={indigo900}>
                <strong>#</strong>
              </Avatar>term</Chip>
            <Chip backgroundColor={blue300} style={{display:'inline-block', margin:5}}>
              <Avatar size={20} color={blue300} backgroundColor={indigo900}>
            <strong>#</strong>
          </Avatar>Learning</Chip>
        </ListItem>
        </List>

      </div>
    );
  }
}
export default WordList;
