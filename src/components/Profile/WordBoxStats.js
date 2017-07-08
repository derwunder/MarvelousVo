import React, { Component } from 'react';
import {connect} from 'react-redux';


//import '../css/home.css';
//import '../css/wordbox.css';
import {CardText} from 'material-ui/Card';
import {FlatButton,RaisedButton,TextField,Avatar,Divider} from 'material-ui';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import {teal700} from 'material-ui/styles/colors';



class WordBoxStats extends Component {
  constructor(props) {
   super(props);


  }

  render() {

    var wb =this.props.wb;

    var cWords=0, cWoBook=0, cWbG=0, cWbFav=0;
    if(wb.length>0){
       wb.forEach((item)=>{
         if(item.gBoard)cWbG++;
         if(item.favorite)cWbFav++;
         if(item.hasOwnProperty('words')){
          cWords+= (item.words).length;
          (item.words).forEach(wd=>{
            if(wd.bookmark) cWoBook++;
          });
        }
      });
    }

    return (

          <CardText>
            <Table  selectable={false}   multiSelectable={false} >
             <TableHeader style={{display:!this.props.editor?'':'none'}} displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
               <TableRow displayBorder={false}>
                 <TableHeaderColumn style={{color:teal700,fontSize:16}}>Wordboxes</TableHeaderColumn>
                 <TableHeaderColumn style={{color:teal700,fontSize:16}}>Words</TableHeaderColumn>
               </TableRow>
             </TableHeader>
             <TableBody displayRowCheckbox={false} style={{display:!this.props.editor?'':'none'}}
            showRowHover={false}
            stripedRows={false}>
               <TableRow style={{borderBottom:''}}>
                 <TableRowColumn>
                   <i style={{display:'inline-block',marginRight:5}}
                     className={"material-icons md-18 md-dark"} aria-hidden="true">view_module</i>
                     <p style={{color:'rgba(0, 0, 0, 0.7)',maxWidth:140, margin:5,fontSize:14,display:'inline-block'}}>
                       {wb.length+" Boxes"}</p>
                 </TableRowColumn>
                 <TableRowColumn>
                   <i style={{display:'inline-block',marginRight:5}}
                     className={"material-icons md-18 md-dark"} aria-hidden="true">list</i>
                     <p style={{color:'rgba(0, 0, 0, 0.7)',maxWidth:140, margin:5,fontSize:14,display:'inline-block'}}>
                       {cWords+" Words"}</p>
                 </TableRowColumn>
               </TableRow>
               <TableRow style={{borderBottom:''}}>
                 <TableRowColumn>
                   <i style={{display:'inline-block',marginRight:5}}
                      className={"material-icons md-18 md-dark"} aria-hidden="true">favorite</i>
                       <p style={{color:'rgba(0, 0, 0, 0.7)',maxWidth:140, margin:5,fontSize:14,display:'inline-block',verticalAlign:'top'}}>
                         {cWbFav+" Favorites"}</p>
                 </TableRowColumn>
                 <TableRowColumn>
                   <i style={{display:'inline-block',marginRight:5}}
                      className={"material-icons md-18 md-dark"} aria-hidden="true">bookmark</i>
                       <p style={{color:'rgba(0, 0, 0, 0.7)',maxWidth:140, margin:5,fontSize:14,display:'inline-block',verticalAlign:'top'}}>
                         {cWoBook+" Words Marked"}</p>
                 </TableRowColumn>
               </TableRow>
               <TableRow style={{borderBottom:''}}>
                 <TableRowColumn>
                   <i style={{display:'inline-block',marginRight:5}}
                      className={"material-icons md-18 md-dark"} aria-hidden="true">language</i>
                       <p style={{color:'rgba(0, 0, 0, 0.7)',maxWidth:140, margin:5,fontSize:14,display:'inline-block',verticalAlign:'top'}}>
                         {cWbG+" Global Post"}</p>
                 </TableRowColumn>
               </TableRow>
             </TableBody>
           </Table>

          </CardText>

    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)  (WordBoxStats);
