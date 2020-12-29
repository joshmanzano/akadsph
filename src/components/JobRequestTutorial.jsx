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
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>New requests are notified through a red badge on request or on notifications and also through pop-up stacks. The pop-up stacks can all be removed by opening the notifications dropdown.</center>',
        position: 'right',
      },
      {
        element: '#requests',
        intro: '<br/> <center><img width="70" src="../static/images/oli-smirk.png"/></center> <br/> <center>Basic details can be easily found in the table</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#view',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Click here to view more details, choose a date, and accept a request.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#files',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Click here to view the learning materials the parents and tutee sent.</center>' ,
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