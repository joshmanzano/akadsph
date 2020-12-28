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
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>Oli here! Before you can request for a tutor you need hour credits.</center>'
      },
      {
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>Hour credits are....</center>'
      },
      {
        element: '#topbar',
        intro: ' <br/> <center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>You can always access this page through the navigation bar by clicking on "Buy Hours".</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#chooseBundles',
        intro: '<br/> <center><img width="70" src="../static/images/oli-smirk.png"/></center> <br/> <center>You can pick how many hour credits you can purchase with our bundles. For your reference, a single tutoring session is typically 1-2hours long.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#bundles',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>We suggest picking the 10 hours or 15 hours bundles so you can save more!</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#validity',
        intro: '<br/> <center><img width="70" src="../static/images/oli-smirk.png"/></center> <br/> <center>The credits are</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#promo',
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