import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import {
  IconButton,
  RaisedButton,
  FlatButton
} from 'material-ui';

class HowTo extends Component {
  constructor(props) {
   super(props);
     this.state = {
       finished: false,
      stepIndex: 0
      };
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 3 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }


  render() {
 const {finished, stepIndex} = this.state;
    return (
      <div className="howto-box">
        <Card style={{margin:10}}>
    <CardTitle title="Ready to start?" subtitle="Just follow the next steps" />

    <CardText >
      <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Sign In or create an account</StepLabel>
            <StepContent>
              <p style={{textAlign:'justify'}}>
                You can sign in with one of the following social media like Google,
                Twitter, Facebook, even with a clasical way using an eMail though,
                we highly recoment to use an existing social media account.
              </p>
              <Card style={{maxWidth:280}}>
                <CardText style={{textAlign:'center'}}>
                  <i style={{margin:'3px'}} className="fa fa-google material-icons md-48 md-dark" aria-hidden="true"></i>
                  <i style={{margin:'3px'}} className="fa fa-facebook-official material-icons md-48 md-dark" aria-hidden="true"></i>
                  <i style={{margin:'3px'}} className="fa fa-github  material-icons md-48 md-dark" aria-hidden="true"></i>
                  <i style={{margin:'3px'}} className="fa fa-envelope material-icons md-48 md-dark" aria-hidden="true"></i>
                </CardText>
              </Card>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create a word or idiom box</StepLabel>
            <StepContent>
              <p style={{textAlign:'justify'}}>A box that contains a group of words
                or idioms so we can keep organize our
                new vocabulary.</p>

                <Card style={{display:'inline-block',width:150, margin:10}}>
                    <CardMedia style={{borderRadius:5}}>
                      <img alt="i-ht" style={{maxWidth:150,borderRadius:5}} src="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FhomeBox%2Fhoy549.jpg?alt=media&token=4bab98d9-1ec1-48b6-b6e2-02544cb8dbc0" />
                    </CardMedia>
                    <CardTitle style={{padding:10}} title="Card title" />
                    <CardActions style={{textAlign:'right'}}>
                      <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                         className="material-icons md-24 md-dark" aria-hidden="true">bookmark</i>
                       </IconButton>
                        <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                           className="material-icons md-24 md-dark" aria-hidden="true">supervisor_account</i>
                         </IconButton>
                        <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                           className="material-icons md-24 md-dark" aria-hidden="true">language</i>
                         </IconButton>
                        <IconButton  style={{width:30,height:30,marginRight:0,padding:0,border:0}}><i
                           className="material-icons md-24 md-dark" aria-hidden="true">more_vert</i>
                         </IconButton>
                    </CardActions>
                </Card>

              <div style={{marginLeft:10,verticalAlign:'top',display:'inline-block', maxWidth:200}}>
                <p style={{textAlign:'justify',display:'inline-block', maxWidth:180}}>Open the menu, then go to your Word Boxes, and press the add Button</p>
                <Card style={{display:'inline-block',maxWidth:200}}>
                  <CardText style={{textAlign:'center'}}>
                    <i style={{margin:'3px'}} className="material-icons md-24 md-dark" aria-hidden="true">menu</i>
                    <i style={{margin:'3px'}} className="material-icons md-24 md-dark md-active" aria-hidden="true">arrow_forward</i>
                    <i style={{margin:'3px'}} className="material-icons md-24 md-dark" aria-hidden="true">view_module</i>
                    <i style={{margin:'3px'}} className="material-icons md-24 md-dark md-active" aria-hidden="true">arrow_forward</i>
                    <i style={{margin:'3px'}} className="material-icons md-24 md-dark" aria-hidden="true">add</i>
                  </CardText>
                </Card>
              </div>

              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Share your box</StepLabel>
            <StepContent>
              <p style={{textAlign:'justify'}}>Once you create a box, you can share with your friends list or in the global community,
                 so everyone can improve and grow a marvelous vocabulary.</p>
                 <Card style={{maxWidth:200}}>
                   <CardText style={{textAlign:'left'}}>
                     <i style={{margin:'3px'}} className="material-icons md-24 md-dark" aria-hidden="true">supervisor_account</i>
                     <i style={{margin:'3px'}} className="material-icons md-24 md-dark md-active" aria-hidden="true">arrow_forward</i>
                     <p style={{display:'inline-block', verticalAlign:'top',marginTop:8}}>Friend List Share</p>
                    </CardText>
                 </Card>
                 <Card style={{maxWidth:200}}>
                   <CardText style={{textAlign:'left'}}>
                     <i style={{margin:'3px'}} className="material-icons md-24 md-dark" aria-hidden="true">language</i>
                     <i style={{margin:'3px'}} className="material-icons md-24 md-dark md-active" aria-hidden="true">arrow_forward</i>
                     <p style={{display:'inline-block', verticalAlign:'top',marginTop:8}}>Global Share</p>
                    </CardText>
                 </Card>

              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>See your personal statistics</StepLabel>
            <StepContent>
              <p>
                The last one but not least, in your profile you will be able
                 to see how you regularly consult your boxes, words and idioms,
                 therefore you might be able to understand where you need to focus
                thus you could improve your vocabulary in a better way.
              </p>
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            We hope that you join us. <strong style={{cursor:'pointer'}}
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            > Restart steps here
            </strong>
          </p>
        )}
    </CardText>
  </Card>
      </div>
    );
  }
}
export default connect(
  (state) => {
    return state;
  }
)(HowTo);
