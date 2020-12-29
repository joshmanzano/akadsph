import React, { Component, useState } from "react";
import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';

function Tutorial(props) {
    const [enabled, setEnable] = useState(props.enabled);

    if(!enabled){
      if(localStorage.getItem('steps') == undefined){
        setEnable(true)
      }
    }

    const onExit = () => {
      localStorage.setItem('steps','done')
      setEnable(false)
    }

    const pictures = [
      '../static/images/start_oli.gif',
      '../static/images/oli-happy.gif',
      '../static/images/oli-wink.gif',
    ]

    pictures.forEach(picture => {
      // new Image().src = picture;
    })

    const steps = [
      {
        element: '#requests',
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>This is the request page! All tutor requests that are applicable to your area of speciality can be found here.</center>'
      },
      {
        element: '#topbar',
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>Click the Requests icon to see all the requests that are currently available..</center>',
        position: 'right',
      },
      {
        element: '#view',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>If you want to see more details on the tutoring request, you can click the View Requests button to view more details.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      
      {
        element: '#view',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>To accept the session, simply click the Accept button.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#files',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>You can also view as any files the parent sent.</center>' ,
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#decline',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Click here to officially decline a request.</center>' ,
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
     
      
    ];

    return (
      <Steps
        enabled={enabled}
        steps={steps}
        initialStep={0}
        onExit={onExit}
      />
    );
}

export default Tutorial;