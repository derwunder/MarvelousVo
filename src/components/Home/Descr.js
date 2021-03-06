import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Card, CardTitle, CardText} from 'material-ui/Card';
import { List , ListItem } from 'material-ui';
import { teal600} from 'material-ui/styles/colors';

import Walkway from 'walkway.js';

class Descr extends Component {
  constructor(props) {
   super(props);
   this.walkwayfunc = this.walkwayfunc.bind(this);

  }
  componentDidMount(){
    this.walkwayfunc('#svg_ic',2500);
    this.walkwayfunc('#svg_ic2',3500);
    this.walkwayfunc('#svg_ic3',4500);
    }
    walkwayfunc(idclass,tm){
      new Walkway({
       selector: idclass,
       duration: tm,
       easing: 'easeInOutCubic'
     }).draw(function() {
       console.dir('Finished diamond!');
     });
    }

  render() {

    return (
      <div className="descr-box">
        <Card style={{margin:10}}>
    <CardTitle title="Build your vocabulary easy fast & practical" subtitle="Let's grow your vocabulary" />

    <CardText >
      <List >
        <ListItem hoverColor={'#FFF'}>
          <svg version="1.1" id="svg_ic" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
          viewBox="0 0 612 612" width="78.533px" height="78.533px" >
          <g>
          <g>
          <path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M363.942,139.261c9.213-4.347,18.573-8.188,28.069-11.869c9.787-3.791,19.879-6.787,29.945-9.725
            c10.167-2.968,20.49-5.563,30.868-7.686c10.374-2.121,20.739-4.007,31.191-5.711c10.274-1.674,20.631-2.771,30.962-4.026
            c10.153-0.812,20.322-1.88,30.499-2.277c8.088-0.318,16.174-0.672,24.263-1.008c6.524-0.269,12.254-4.638,13.857-11.051
            c1.767-7.063-2.143-14.538-8.93-17.149c-5.546-2.131-12.205-0.015-17.808,0.903c-9.021,1.479-18.024,2.944-26.986,4.753
            c0.517-0.106,0.707-0.145-0.158,0.03c-3.246,0.662-1.855,0.379-0.594,0.123c-9.961,2.031-19.864,4.132-29.737,6.564
            c-10.292,2.535-20.455,5.367-30.634,8.323c-20.214,5.872-39.98,13.435-59.255,21.865c-13.069,5.716-25.597,12.5-37.993,19.522
            c-5.871,3.327-11.473,7.158-17.05,10.946c-4.175,2.836-8.309,5.911-12.124,9.251c0.313-0.121,0.614-0.225,0.927-0.348
            C349.777,146.319,356.882,142.595,363.942,139.261z"/>
          <path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M342.268,134.661c8.258-6.207,16.704-12.039,25.424-17.58c15.14-9.62,31.078-17.653,47.309-25.244
            c19.21-8.983,39.411-15.622,59.666-21.769c17.444-5.295,35.398-8.66,53.261-12.169c6.942-1.362,12.217-7.218,12.199-14.424
            c-0.02-7.775-6.403-14.325-14.17-14.546c-2.53-0.073-4.819,0.675-7.176,1.452c-3.923,1.286-7.847,2.575-11.771,3.863
            c-9.64,3.167-19.092,6.694-28.566,10.326c-19.902,7.624-39.209,17.058-57.766,27.516c-15.304,8.624-30.245,18.053-44.26,28.659
            c-11.122,8.417-22.083,17.121-32.131,26.816c-4.821,4.653-9.629,9.322-14.118,14.3c-3.645,4.044-7.429,8.133-10.404,12.708
            c0.572-0.68,1.148-1.342,1.777-1.971C327.716,145.972,335.047,140.089,342.268,134.661z"/>
          <path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M249.62,136.483c-8.742-5.508-17.697-10.515-26.806-15.381c-9.248-4.936-18.884-9.189-28.528-13.278
            c-9.632-4.084-19.395-8.005-29.323-11.314c-10.138-3.379-20.263-6.628-30.527-9.607c-10.024-2.908-20.147-5.355-30.281-7.852
            c-18.838-4.641-38.087-7.597-57.217-10.728c-3.384-0.554-6.632-0.78-9.901,0.559c-4.044,1.657-7.206,5.135-8.454,9.326
            c-2.673,8.976,4.016,18.354,13.371,18.741c7.193,0.299,14.386,0.594,21.578,0.897c10.111,0.421,20.185,1.336,30.273,2.144
            c10.394,0.832,20.926,2.119,31.215,3.798c10.359,1.69,20.666,3.434,30.95,5.538c20.726,4.242,41.269,9.782,61.166,16.998
            c9.542,3.462,18.849,7.418,28.087,11.613c8.042,3.768,16.025,7.864,23.469,12.736c0.316,0.126,0.622,0.231,0.937,0.354
            C263.458,145.607,256.535,140.836,249.62,136.483z"/>
          <path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M83.641,57.814c16.813,3.302,33.685,6.478,50.179,11.186c20.36,5.812,40.188,12.971,59.669,21.245
            c9.762,4.147,19.21,9.043,28.603,13.954c6.421,3.359,12.794,6.929,18.924,10.79c16.837,10.607,33.379,21.975,47.713,35.866
            c1.224,1.186,2.409,2.407,3.507,3.713c-4.696-7.225-11.062-13.506-17.02-19.678c-7.16-7.423-14.915-14.383-22.87-20.939
            c-13.376-11.024-27.275-21.262-41.966-30.473c-18.299-11.475-37.273-21.747-57.018-30.516
            c-9.712-4.312-19.487-8.263-29.408-12.067c-8.945-3.43-18.041-6.346-27.141-9.334c-3.299-1.081-6.789-2.622-10.312-2.638
            c-4.776-0.02-9.366,2.397-12.069,6.333C68.591,43.754,73.538,55.828,83.641,57.814z"/>
          <g>
            <path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M597.956,121.095c-6.069-0.215-12.345-0.321-18.652-0.321c-77.241,0-155.798,15.725-205.9,28.177v420.89
              c49.157-20.861,135.302-53.093,226.234-66.951c7.11-1.083,12.362-7.196,12.362-14.388V135.639
              C612,127.801,605.79,121.37,597.956,121.095z"/>
          </g>
          <path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M348.941,150.092c-15.606,7.017-29.248,10.282-42.941,10.282s-27.335-3.266-42.941-10.282l-2.806-1.331
            c0,0.012,0,0.025,0,0.035c0.007,76.82,0.003,200.05,0.002,281.233l-0.002,139.81c0.592,2.189,11.018,13.238,45.747,13.238
            c34.731,0,45.155-11.046,45.747-13.235V148.8c0-0.015,0-0.027,0-0.037L348.941,150.092z"/>
          <g>
            <path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M14.044,121.095C6.208,121.37,0,127.801,0,135.639v352.86c0,7.191,5.252,13.305,12.362,14.388
              c90.934,13.857,177.078,46.091,226.235,66.951l0.003-131.13c0.002-93.489,0.003-201.174-0.003-289.761
              c-50.102-12.448-128.661-28.174-205.902-28.174C26.389,120.774,20.112,120.881,14.044,121.095z"/>
          </g>
          </g>
          </g>
          </svg>
          <p>Handle your own content <strong>Words, Idioms & Slangs.</strong></p>
        </ListItem>
        <ListItem hoverColor={'#FFF'}>
          <svg version="1.1" id="svg_ic2" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
          	 viewBox="0 0 489.5 489.5" width="78.533px" height="78.533px">
          <g>
          	<g>
          		<path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M315.6,145.98l38.7,24.5c3.3,2.1,7.4-0.5,7.4-4.7v-15.3h23.7c4.9,0,8.9,4,8.9,8.9v62.1c0,5.1,4.1,9.2,9.2,9.2
          			s9.2-4.1,9.2-9.2v-62.1c0-15-12.2-27.3-27.3-27.3h-23.7v-15.3c0-4.2-4.1-6.8-7.4-4.7l-38.7,24.5
          			C312.3,138.68,312.3,143.88,315.6,145.98z"/>
          		<path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M78.7,229.08c2.1,3.3,7.3,3.3,9.4,0l24.5-38.7c2.1-3.3-0.5-7.4-4.7-7.4H92.6v-23.7c0-4.9,4-8.9,8.9-8.9h47.8
          			c5.1,0,9.2-4.1,9.2-9.2c0-5.1-4.1-9.2-9.2-9.2h-47.8c-15,0-27.3,12.2-27.3,27.3v23.7H58.9c-4.2,0-6.8,4.1-4.7,7.4L78.7,229.08z"/>
          		<path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M294.7,392.08l-38.7-24.5c-3.3-2.1-7.4,0.5-7.4,4.7v15.3h-49.2c-5.1,0-9.2,4.1-9.2,9.2s4.1,9.2,9.2,9.2h49.2v15.3
          			c0,4.2,4.1,6.8,7.4,4.7l38.7-24.5C298,399.48,298,394.18,294.7,392.08z"/>
          		<path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M234.8,229.68h4.4h84.4c-0.5-35.1,1-53.9-21.8-62.1c-20.7-7.9-33-16-33-16l-15.9,50.4l-2.2,6.8l-7.1-20.2
          			c16.4-22.9-1.2-24-4.3-24l0,0c0,0,0,0-0.1,0l0,0l0,0c0,0,0,0-0.1,0l0,0c-3.1,0-20.7,1.1-4.3,24l-7.1,20.2l-2.2-6.8l-15.9-50.4
          			c0,0-12.4,8.1-33,16c-22.8,8.3-21.4,27-21.8,62.1H234.8z"/>
          		<path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M203.6,119.68c1.8,11.8,10.9,26.9,26,32.2c6.1,2.2,12.9,2.2,19,0c14.8-5.3,24.2-20.3,26-32.1c2-0.2,4.6-2.9,7.4-12.9
          			c3.9-13.6-0.2-15.6-3.7-15.3c0.7-1.9,1.2-3.7,1.5-5.6c5.9-35.2-11.5-36.5-11.5-36.5s-2.9-5.5-10.5-9.7c-5.1-3-12.1-5.3-21.5-4.5
          			c-3,0.1-5.9,0.7-8.6,1.6l0,0c-3.4,1.2-6.6,2.8-9.4,4.8c-3.5,2.2-6.8,4.9-9.7,8c-4.6,4.7-8.7,10.8-10.5,18.3
          			c-1.5,5.7-1.2,11.6,0.1,17.9l0,0c0.3,1.9,0.8,3.7,1.5,5.6c-3.5-0.3-7.6,1.7-3.7,15.3C199,116.68,201.6,119.48,203.6,119.68z"/>
          		<path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M467.7,392.28c-20.7-7.9-33-16-33-16l-16,50.4l-2.2,6.8l-7.1-20.2c16.4-22.9-1.2-24-4.3-24l0,0c0,0,0,0-0.1,0l0,0l0,0
          			c0,0,0,0-0.1,0l0,0c-3.1,0-20.7,1.1-4.3,24l-7.1,20.2l-2.2-6.8l-15.9-50.4c0,0-12.4,8.1-33,16c-22.8,8.3-21.4,27-21.8,62.1h80.1
          			h4.4h84.4C489,419.28,490.4,400.58,467.7,392.28z"/>
          		<path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M402.3,259.78c-3,0.1-5.9,0.7-8.6,1.6l0,0c-3.4,1.2-6.6,2.8-9.4,4.8c-3.5,2.2-6.8,4.9-9.7,8c-4.6,4.7-8.7,10.8-10.5,18.3
          			c-1.5,5.7-1.2,11.6,0.1,17.9l0,0c0.3,1.9,0.8,3.7,1.5,5.6c-3.5-0.3-7.6,1.7-3.7,15.3c2.8,9.9,5.4,12.7,7.4,12.9
          			c1.8,11.8,10.9,26.9,26,32.2c6.1,2.2,12.9,2.2,19,0c14.8-5.3,24.2-20.3,26-32.1c2-0.2,4.6-2.9,7.4-12.9
          			c3.9-13.6-0.2-15.6-3.7-15.3c0.7-1.9,1.2-3.7,1.5-5.6c5.9-35.2-11.5-36.5-11.5-36.5s-2.9-5.5-10.5-9.7
          			C418.7,261.38,411.6,258.98,402.3,259.78z"/>
          		<path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M147.1,392.28c-20.7-7.9-33-16-33-16l-16,50.4l-2.2,6.8l-7.1-20.2c16.4-22.9-1.2-24-4.3-24l0,0c0,0,0,0-0.1,0l0,0l0,0
          			c0,0,0,0-0.1,0l0,0c-3.1,0-20.7,1.1-4.3,24l-7.1,20.2l-2.2-6.8l-15.9-50.4c0,0-12.4,8.1-33,16c-22.8,8.3-21.4,27-21.8,62.1h80.2
          			h4.4H169C168.5,419.28,169.9,400.58,147.1,392.28z"/>
          		<path style={{fill:'transparent',stroke:teal600,strokeWidth:'10px'}} d="M48.9,344.38c1.8,11.8,10.9,26.9,26,32.2c6.1,2.2,12.9,2.2,19,0c14.8-5.3,24.2-20.3,26-32.1c2-0.2,4.6-2.9,7.4-12.9
          			c3.9-13.6-0.2-15.6-3.7-15.3c0.7-1.9,1.2-3.7,1.5-5.6c5.9-35.2-11.5-36.5-11.5-36.5s-2.9-5.5-10.5-9.7c-5.1-3-12.1-5.3-21.5-4.5
          			c-3,0.1-5.9,0.7-8.6,1.6l0,0c-3.4,1.2-6.6,2.8-9.4,4.8c-3.5,2.2-6.8,4.9-9.7,8c-4.6,4.7-8.7,10.8-10.5,18.3
          			c-1.5,5.7-1.2,11.6,0.1,17.9l0,0c0.3,1.9,0.8,3.7,1.5,5.6c-3.5-0.3-7.6,1.7-3.7,15.3C44.3,341.38,46.9,344.18,48.9,344.38z"/>
          	</g>
          </g>

          </svg>
          <p>Share with your friends <strong>Words & Idioms Boxes.</strong></p>

        </ListItem>
        <ListItem hoverColor={'#FFF'}>
          <svg version="1.1" id="svg_ic3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          	 viewBox="0 0 55 55" width="78.533px" height="78.533px"
             style={{display:'inline-block'}}>
          <path style={{fill:'transparent',stroke:teal600,strokeWidth:'1px'}} d="M49,0c-3.309,0-6,2.691-6,6c0,1.035,0.263,2.009,0.726,2.86l-9.829,9.829C32.542,17.634,30.846,17,29,17
          	s-3.542,0.634-4.898,1.688l-7.669-7.669C16.785,10.424,17,9.74,17,9c0-2.206-1.794-4-4-4S9,6.794,9,9s1.794,4,4,4
          	c0.74,0,1.424-0.215,2.019-0.567l7.669,7.669C21.634,21.458,21,23.154,21,25s0.634,3.542,1.688,4.897L10.024,42.562
          	C8.958,41.595,7.549,41,6,41c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6c0-1.035-0.263-2.009-0.726-2.86l12.829-12.829
          	c1.106,0.86,2.44,1.436,3.898,1.619v10.16c-2.833,0.478-5,2.942-5,5.91c0,3.309,2.691,6,6,6s6-2.691,6-6c0-2.967-2.167-5.431-5-5.91
          	v-10.16c1.458-0.183,2.792-0.759,3.898-1.619l7.669,7.669C41.215,39.576,41,40.26,41,41c0,2.206,1.794,4,4,4s4-1.794,4-4
          	s-1.794-4-4-4c-0.74,0-1.424,0.215-2.019,0.567l-7.669-7.669C36.366,28.542,37,26.846,37,25s-0.634-3.542-1.688-4.897l9.665-9.665
          	C46.042,11.405,47.451,12,49,12c3.309,0,6-2.691,6-6S52.309,0,49,0z"/>
          </svg>
          <p>Need more? Just take a look at the <strong>Global content.</strong></p>
        </ListItem>
      </List>
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
)(Descr);
