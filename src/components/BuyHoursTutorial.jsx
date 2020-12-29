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
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>Oli here! Before you can request for a tutor, you need to buy credits.</center>'
      },
      {
        intro: ' <br/><center><img width="70" src="../static/images/oli-happy.png"/></center> <br/> <center>1 Credit = 1 hour of tutoring.</center>'
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
        intro: '<br/> <center><img width="70" src="../static/images/oli-smirk.png"/></center> <br/> <center>The credits are only good for 6 months. You can find the expiration date here.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '#promo',
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Promo codes allow you to have special discounts!</center>' ,
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>You can pay through Credit Cards, Bank transfer, Gcash, E-Wallets</center> <center>Note: This is for single sessions and not multiple sessions </center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Please note that we do not store any of your baking details.</center>',
        position: 'right',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        intro: '<br/><center><img width="70" src="../static/images/oli-smirk.png"/></center><br/> <center>Not satisfied or can\'t match with a tutor? We have a 30 day money back guarantee. You may refer to the link below.</center>',
        // tooltipClass: 'myTooltipClass',
        // highlightClass: 'myHighlightClass',
      },
      {
        element: '.floater',
        intro: '<br/><center><img width="70" src="../static/images/oli-wink.png"/></center><br/> <center>If you have more questions just know I am right here.</center> <center> Happy Learning!</center>',
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