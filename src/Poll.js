import React, {Fragment} from 'react';

import useInterval from 'react-useinterval';

const Poll = (props) => {

  poll = () => {
    const getData = () => {
      console.log('hello')
    }
    useInterval(getData, 1000)
  }


  return (
    <Fragment>
      {poll()}
    </Fragment>
  );
};

export default Poll;
