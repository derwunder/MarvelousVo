import React, { Component } from 'react';
import {connect} from 'react-redux';

import {IconButton,FloatingActionButton, Dialog,FlatButton,RaisedButton,Subheader} from 'material-ui';
import {TextField, Toggle,Chip} from 'material-ui';

import {startWordItemUpdate} from '../../actions/ActWordBox';

class WordItemEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      definitions:this.props.item.definitions,
      translations:this.props.item.translations,
      tags:this.props.item.tags,
      wordTerm:this.props.item.wordTerm,
      bookmark:this.props.item.bookmark,
      tagText:''
    };
    this.handleChangeFav=this.handleChangeFav.bind(this);
    this.handleSave=this.handleSave.bind(this);
  }

// it will take a look of recent props, specially when a parent modifie
  componentWillReceiveProps(nextProps) {
    if(nextProps.item.bookmark !== this.props.item.bookmark) {
      this.setState({bookmark: nextProps.item.bookmark});
    }
  }

  restoreState =()=>{
      this.setState({wordTerm: this.props.item.wordTerm});
      this.setState({bookmark: this.props.item.bookmark});
      this.setState({definitions:this.props.item.definitions});
      this.setState({translations:this.props.item.translations});
      this.setState({tags:this.props.item.tags});
      this.setState({tagText:''});
  };
  handleOpen = () => {
    this.restoreState();
      this.setState({open: !this.state.open});
    };

    handleChangeFav  () {
      this.setState({bookmark: !this.state.bookmark});
    }
    handleSave  () {
      var {dispatch} = this.props;
      var itemUpdates ={
      wordTerm:this.state.wordTerm,
      bookmark:this.state.bookmark,
      definitions:this.state.definitions,
      translations:this.state.translations,
      tags:this.state.tags
    };
     dispatch(startWordItemUpdate(this.props.wordBoxId,this.props.item.id,itemUpdates));
     this.props.handleEditor();
  //  this.setState({open: !this.state.open});
    }



  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={()=>{this.restoreState();this.props.handleEditor();}}
      />,
      <FlatButton
        label="Update"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSave}
      />,
    ];

    var definitions= this.state.definitions;
    var translations= this.state.translations;
    var tags=this.state.tags;
    return (
      <div >

    <Dialog contentStyle={{width:'95%',maxWidth:550,transform: 'translate(0px, 5px)',minHeight:140}}
            bodyStyle={{minHeight:140}}
            style={{minHeight:140,paddingTop:0}}
          repositionOnUpdate={true}
          autoDetectWindowHeight={false}
          title="Word Term Editor"
          actions={actions}
          modal={true}
          open={this.props.editor}
          autoScrollBodyContent={true}
        >

      <TextField style={{margin:5, display:'block'}}
        hintText="Word-Term"  floatingLabelText="Word-Term"
        id="word-termEd" value={this.state.wordTerm}
        fullWidth={true}
        onChange={(e)=>{ this.setState({wordTerm: e.target.value});}} />

        <Subheader><i style={{margin:'5px'}} className="material-icons md-18 md-dark">description</i>
        Definitions</Subheader>

        {definitions.map((item,index) => {
          return <div key={"key"+index}  style={{display:'block'}}>
            <TextField style={{margin:5, display:'inline-block',width:60,verticalAlign:'top'}}
              hintText="DefTp" value={item.tp}
              multiLine={true}
              rowsMax={1}
              onChange={(e)=>{
                var ob= this.state.definitions;
                ob.map((item,count)=>{
                  if(count===index){ item.tp=e.target.value; }
                  return item;
                });
                this.setState({definitions:[...ob]});
                //console.log("obt value "+index+": "+ob[index]["tp"]);
            }}
            />
            <TextField style={{margin:5, display:'inline-block',width:175}}
            hintText="Definition" value={item.def}
            multiLine={true}
            rowsMax={4}
            onChange={(e)=>{
              var ob= this.state.definitions;
              ob.map((item,count)=>{
                if(count===index) {item.def=e.target.value;}
                return item;
              });
              this.setState({definitions:[...ob]});
              //console.log("obd value "+index+": "+ob[index]["def"]);
          }}
          />

          { (index>0) &&
            <RaisedButton  style={{display:'inline-block',height:30,marginRight:0,padding:0,border:0}}
              label="remove"
              labelPosition="before"
              primary={true}
              icon={<i  className="material-icons md-20 md-light">cancel</i>}
              onTouchTap={()=>{
                  var ob= this.state.definitions;
                    ob.splice(index,1);
                  this.setState({definitions:[...ob]});
              }}
            />
          }
          </div>;
        })}

      <div style={{display:'block', marginTop:12,marginBottom:12}}>
      <RaisedButton
              label="Add Definition"
              labelPosition="before"
              primary={true}
              icon={<i className="material-icons md-24 md-light " aria-hidden="true">add_circle</i>}
        onTouchTap={()=>{
        var prev = this.state.definitions;
        this.setState({definitions:[...prev,{tp:'',def:''}]});
      }}/>
    </div>

<Subheader><i style={{margin:'5px'}} className="material-icons md-18 md-dark">g_translate</i>
Translations</Subheader>


        {translations.map((item,index) => {
          return <div key={"trans"+index}  style={{display:'block'}}>
            <TextField style={{margin:5, display:'inline-block',width:60,verticalAlign:'top'}}
              hintText="Lang" value={item.lan}
              multiLine={true}
              rowsMax={1}
              onChange={(e)=>{
                var ob= this.state.translations;
                ob.map((item,count)=>{
                  if(count===index){ item.lan=e.target.value; }
                  return item;
                });
                this.setState({translations:[...ob]});
                //console.log("obt value "+index+": "+ob[index]["tp"]);
            }}
            />
            <TextField style={{margin:5, display:'inline-block',width:175}}
            hintText="Translation" value={item.tr}
            multiLine={true}
            rowsMax={2}
            onChange={(e)=>{
              var ob= this.state.translations;
              ob.map((item,count)=>{
                if(count===index) {item.tr=e.target.value;}
                return item;
              });
              this.setState({translations:[...ob]});
              //console.log("obd value "+index+": "+ob[index]["def"]);
          }}
          />
          { (index>0) &&
            <RaisedButton  style={{display:'inline-block',height:30,marginRight:0,padding:0,border:0}}
              label="remove"
              labelPosition="before"
              primary={true}
              icon={<i  className="material-icons md-20 md-light">cancel</i>}
              onTouchTap={()=>{
                  var ob= this.state.translations;
                    ob.splice(index,1);
                  this.setState({translations:[...ob]});
              }}
            />
          }
          </div>;
        })}

    <div style={{display:'block',marginTop:12,marginBottom:12}}>
    <RaisedButton
            label="Add Translation"
            labelPosition="before"
            primary={true}
            icon={<i className="material-icons md-24 md-light " aria-hidden="true">add_circle</i>}
      onTouchTap={()=>{
      var prev = this.state.translations;
      this.setState({translations:[...prev,{lan:'',tr:''}]});
    }}/>
  </div>

  <Subheader><i style={{margin:'5px'}} className="fa fa-tags md-18 material-icons md-dark"></i>
    Tags
  </Subheader>

  {tags.map((item,index) => {
    return(
      <Chip key={"tag"+index} style={{display:item.tag!==''?'inline-flex':'none', margin:5}}
        onRequestDelete={()=>{
          var ob= this.state.tags;
          ob.splice(index,1);
          this.setState({tags:[...ob]});
        }}
        >
        {item.tag}</Chip>);
  })}

  <div style={{display:'block',marginTop:12,marginBottom:12}}>
    <TextField style={{margin:5, display:'inline-block',width:105}}
    hintText="Tag"
    multiLine={false}
    onChange={(e)=>{

      this.setState({tagText:e.target.value});
      //console.log("obd value "+index+": "+ob[index]["def"]);
  }}
  />
  <RaisedButton  style={{margin:5, display:'inline-block'}}
          label="Add Tag"
          labelPosition="before"
          primary={true}
          icon={<i className="material-icons md-24 md-light " aria-hidden="true">add_circle</i>}
    onTouchTap={()=>{
    var prev = this.state.tags;
    if(prev[0]['tag']==='' && this.state.tagText!==''){
      prev[0]['tag']=this.state.tagText;
      this.setState({tags:[...prev]});
    }else if(this.state.tagText!==''){
      this.setState({tags:[...prev,{tag:this.state.tagText}]});
    }
  }}/>
</div>


      <Toggle style={{maxWidth:300,marginTop:15}}
        onToggle={this.handleChangeFav} defaultToggled={this.state.bookmark}
        label={<span >
          <i style={{marginRight:5,marginLeft:5}}
            className={this.state.bookmark?"material-icons md-20 md-dark md-active":"material-icons md-20 md-dark"}
             aria-hidden="true">bookmark</i>Bookmark
          </span>}
      labelPosition="right" />

    </Dialog>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(WordItemEdit);
