import React, { Component, useState } from "react";

function Tutorial(props) {
  const [enabled, setEnable] = useState(
    localStorage.getItem("stepsBuyHours") == undefined
  );

  const onExit = () => {
    localStorage.setItem("stepsBuyHours", "done");
    setEnable(false);
  };

  const pictures = [
    "../static/images/start_oli.gif",
    "../static/images/oli-happy.gif",
    "../static/images/oli-wink.gif",
  ];

  pictures.forEach((picture) => {
    // new Image().src = picture;
  });

  return (
    <Steps
      enabled={enabled}
      steps={steps}
      initialStep={0}
      onExit={onExit}
      options={{
        disableInteraction: true,
        showProgress: true,
        showBullets: false,
        showStepNumbers: true,
        exitOnOverlayClick: false,
      }}
    />
  );
}

export default Tutorial;
