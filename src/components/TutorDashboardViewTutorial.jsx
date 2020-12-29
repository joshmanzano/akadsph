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
      // props.openTerms()
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
        intro: '<br/><center><img width="70" src="../static/images/oli-happy.png"/></center><br/> <center>Hi there! I\’m Oli, the Akads mascot and your guide.  </center>'
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-wink.png"/></center><br/> <center>Akads lets parents match with the best tutor for their child\’s academic goals. Accept requests based on the best subjects and topics you can teach and how well you can handle the request.</center>'
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-wink.png"/></center><br/> <center>Impress the tutees and their parents and they\’ll likely book you more in the future!</center>'
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
        element: '#upcoming',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>You can view your upcoming accepted sessions in the Upcoming Sessions portion. You may also view again the details of each session here.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#calendar',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>The days of your upcoming sessions will be <span id="highlighted">highlighted</span> in this calendar.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#upcoming',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>10 minutes before your session, a pop up will appear for you to start the ZOOM call. Start the call to test your internet and presentation. </center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#upcoming',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Note that all calls will be recorded automatically (don’t worry, the parents have already consented to this). Once you’ve concluded your session, do not end recording - simply end the call.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#upcoming',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>You will be prompted to upload the video of your calls to the Akads site shortly afterwards.</center>',
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