import React, { Component, useState } from "react";
import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';

function Tutorial(props) {
    const [enabled, setEnable] = useState(props.enabled);

    const onExit = () => {
      localStorage.setItem('stepsTutorProfile','done')
      setEnable(false)
      window.location.reload()
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
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>This is the profile page! Anything related to your account can be found here.</center>'
      },
      {
        element: '#profilePic',
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>You can upload or change your profile picture here! It will be displayed in the chat messages.</center>',
        position: 'right',
      },
      {
        element: '#profileDets',
        intro: '<br/> <center><img width="70" src="../static/images/oli-smirk.png"/></center> <br/> <center>You can edit your profile details.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#metrics',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>You can view your standing as a tutor here in metrics.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#monthlyMetrics',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Monthly metrics refelct your standing for the whole month. It will refresh every first day of the month.</center>' ,
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#allTimeMetrics',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>While this show overall standing as a tutor.</center>' ,
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