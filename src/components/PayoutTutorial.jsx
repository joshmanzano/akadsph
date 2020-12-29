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
        element: '#header',
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>Payout & History page is breakdown of your past sessions and your profits. It helps track when you\'ll receive your earnings.</center>'
      },
      {
        element: '#dates',
        intro: '<br/> <center><img width="70" src="../static/images/oli-smirk.png"/></center> <br/> <center>Payout are accumalated in a week and released by Friday.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#hours',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>This tells you how many hours of tutoring you\'ve accomplished in a week.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#amount',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>The total amount you will receive from all your sessions during the specified date range.</center>' ,
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#payoutDate',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>The day when your pay is given to you.</center>' ,
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#receipt',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Click here to view your e-receipts for the payout.</center>' ,
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '.MuiAccordionSummary-expandIcon.Mui-expanded',
        intro: '<br/> <center><img width="70" src="../static/images/oli-smirk.png"/></center> <br/> <center>Click here to show the breakdown of sessions.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#table',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>A break down of the individual sessions you\'ve done.</center>' ,
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#view',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Click here to view more specific details of the session.</center>' ,
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