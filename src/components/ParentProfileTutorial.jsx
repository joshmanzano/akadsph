import React, { Component, useState } from "react";
import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';

function Tutorial(props) {
    const [enabled, setEnable] = useState(localStorage.getItem('stepsParentProfile') == undefined);

    const onExit = () => {
      localStorage.setItem('stepsParentProfile','done')
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
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>This is the profile page! Anything related to your account can be found here.</center>'
      },
      {
        element: '#profilePic',
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>You can upload or change your profile picture here! It will be displayed in the chat messages.</center>',
        position: 'right',
      },
      {
        element: '#profileDets',
        intro: '<br/> <center><img width="70" src="../static/images/oli-smirk.png"/></center> <br/> <center>Your profile details can be edited here.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#children',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>You can view your child details here. You may also edit the child details and add more children for tutoring.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#faveTutors',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>You can also view and remove your favorite tutors here.</center>' ,
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
options={{
        disableInteraction:true,
        showProgress:true,
        showBullets:false,
       showStepNumbers:true,
exitOnOverlayClick:false
}}
/>
    );
}

export default Tutorial;