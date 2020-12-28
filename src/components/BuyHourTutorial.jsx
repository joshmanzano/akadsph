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
        intro: '<img width="300" src="../static/images/start_oli.gif"/> <center>Welcome to AKADS!</center>'
      },
      {
        intro: '<center><img width="70" src="../static/images/oli-happy.png"/></center> <center>Hello there! My name is Oli, the mascot of AKADS!</center>'
      },
      {
        intro: '<center><img width="70" src="../static/images/oli-wink.png"/></center> <center>I\'m here to guide you in using AKADS, so no need to worry about getting lost!</center>'
      },
      {
        element: '#topbar',
        intro: '<center><img width="70" src="../static/images/oli-happy.png"/></center> <center>Up here is the navigation bar, which you can use to explore the website!</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#topbar',
        intro: '<center><img width="70" src="../static/images/oli-smirk.png"/></center> <center>There are multiple pages to go through, I\'ll be there to help you in every page!</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#overview',
        intro: '<center><img width="70" src="../static/images/oli-smirk.png"/></center> <center>Right now you are in the "Overview" page, where you can keep track of various information.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#calendar',
        intro: '<center><img width="70" src="../static/images/oli-smirk.png"/></center> <center>Here you can keep track of your upcoming sessions. Days where you have sessions will be <span id="highlighted">highlighted</span>.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#upcoming',
        intro: '<center><img width="70" src="../static/images/oli-smirk.png"/></center> <center>Upcoming sessions for the selected date in the calendar will appear here.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#overview',
        intro: '<center><img width="70" src="../static/images/oli-smirk.png"/></center> <center>Below that, you can see your pending requests, past sessions, and past transactions.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        intro: '<center><img width="70" src="../static/images/oli-smirk.png"/></center> <center>To start off, I suggest to either book a tutor with your free 1 hour, or buy more hours first so you don\'t have to worry about buying in the future.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        intro: '<center><img width="70" src="../static/images/oli-smirk.png"/></center> <center>I\'ll explain what "requesting a tutor" and "buying hours" means later, go ahead and go to a different page and I\'ll meet you there!</center>',
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