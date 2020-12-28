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
        intro: '<br/><center><img width="70" src="../static/images/oli-happy.png"/></center><br/> <center>Hello there! My name is Oli, the mascot of AKADS!</center>'
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
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Here you can keep track of your upcoming sessions. Days where you have sessions will be <span id="highlighted">highlighted</span>.</center>',
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
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>When it\'s time for your session, I\'ll remind you to join the Zoom call with your tutor.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#history',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>After a session, if you liked the tutor we booked for you, you can add them to your favorite tutors list so that you can request for them specifically next time.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      // {
      //   element: '#overview',
      //   intro: '<center><img width="70" src="../static/images/oli-smirk.png"/></center> <center>Below that, you can see your pending requests, past sessions, and past transactions.</center>',
      //   position: 'right',
      // },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>To start off, I suggest to either request a tutor or buy hours. Since it\'s your first time, your first hour is on us!</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>I\'ll explain what "request a tutor" and "buy hours" means later when you get to those pages. So go ahead and explore!</center>',
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