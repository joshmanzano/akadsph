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
      props.openTerms()
    }

    const pictures = [
      '../static/images/start_oli.gif',
      '../static/images/oli-happy.png',
      '../static/images/oli-wink.png',
      '../static/images/oli-smirk.png',
      '../static/images/oli-idea.png',
    ]

    pictures.forEach(picture => {
      // new Image().src = picture;
    })

    const steps = [
      {
        intro: '<img width="300" src="../static/images/start_oli.gif"/> <center>Welcome to AKADS!</center>'
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-happy.png"/></center><br/> <center>Hello there! My name is Oli, the spirit of AKADS!</center>'
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-wink.png"/></center><br/> <center>I\'m here to guide you in using AKADS, so no need to worry about getting lost!</center>'
      },
      {
        element: '#topbar',
        intro: '<br/><center><img width="70" src="../static/images/oli-happy.png"/></center><br/> <center>Up here is the navigation bar, which you can use to explore the website!</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#topbar',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>There are multiple pages to go through, I\'ll be there to help you in every page!</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#overview',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Right now you are in the "Overview" page, where you can keep track of various information.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#calendar',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Here you can keep track of your upcoming sessions. Days where you have a tutor job will be <span id="highlighted">highlighted</span>.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#upcoming',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Upcoming sessions for the selected date in the calendar will appear here.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#upcoming',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>When it\'s time for your session, I\'ll remind you to start the Zoom call with your tutee.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#history',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>You can view all your past sessions here.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>I\'ll explain what "Request" and "Payout" means later when you get to those pages. So go ahead and explore!</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>We\'re glad to have you part of the Akads family!</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '.floater',
        intro: 'No matter where you are, you can always click here to ask me for help!',
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