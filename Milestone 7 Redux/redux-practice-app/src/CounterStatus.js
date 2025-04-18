import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounterValue } from './redux/counterSlice';

const CounterStatus = () => {
  const count = useSelector(selectCounterValue);

  let message = '';
  if (count > 10) message = 'Whoa! That’s a high number!';
  else if (count < 0) message = 'Uh oh! Negative vibes!';
  else if (count === 0) message = 'All reset. Back to zero!';
  else message = 'Keep going!';

  return <p>{message}</p>;
};

export default CounterStatus;
