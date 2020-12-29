import React, { Component, useState } from "react";
import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';

function Tutorial(props) {
    const [enabled, setEnable] = useState(props.enabled);

    const onExit = () => {
      localStorage.setItem('stepsRequest','done')
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
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>Hello there! This page is for requesting and matching the best tutors for your child.</center>'
      },
      {
        element: '#topbar',
        intro: ' <br/> <center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>You can always access this page through the navigation bar by clicking on "Request".</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#tutoringDetails',
        intro: '<br/> <center><img width="70" src="../static/images/oli-smirk.png"/></center> <br/> <center>Specify the details for the single tutor request here!</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#sessionLength',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Hour credits will be used depending on the length of the session regardless of the subject and tutor option. Ex. A session length of 2 hours will deduct 2 from the hour credits. </center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#subjectDetails',
        intro: '<br/> <center><img width="70" src="../static/images/oli-smirk.png"/></center> <br/> <center>Specify the details for the single tutor request here! We highly encourage to send learning materials so our tutors can appropriately prepare.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#tutoringDetails',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Once you add a tutor to your favorites, you can specifically request them here next time!</center> <center>You can add tutors in favorite after experiencing at least one session with them.</center>' ,
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#availability',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Pick out the possible dates and time your kid is most free for the tutoring session!</center> <center>Note: This is for single sessions and not multiple sessions </center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#specialRequests',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Feel free to specify any special request here! This is just optional if ever.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Deductions from the credit hours will only be reflected once the request has been accepted. Make sure you have enough hour credits before you make a request!</center>',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-wink.png"/></center><br/> <center>Sit back, relax, and get matched with a tutor.</center> <center> Happy Learning!</center>',
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