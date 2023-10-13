
import { useState } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';


export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const addFeedback = (item) => {
    console.log(item)
    switch (item) {
      case 'good':
        setGood(prev => prev + 1)
        break;
      case 'neutral':
        setNeutral(prev => prev + 1)
        break;
      case 'bad':
        setBad(prev => prev + 1)
        break;
      default:
    }
  }

  const countTotalFeedback = () => {
    return bad + good + neutral;
  }

  const countPositiveFeedbackPercentage = () => {
    return parseInt((good / countTotalFeedback()) * 100) || 0;


  }
  const state = ['good', 'neutral', 'bad']
  const showRating = () => countTotalFeedback() > 0;

  return (
    <div >
      <h1>Please leave feedback</h1>
      <FeedbackOptions feedbackTypes={state} addFeedback={addFeedback} />
      {showRating && <Statistics countTotalFeedback={countTotalFeedback()} countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()} good={good} neutral={neutral} bad={bad} />}
      {!showRating && (<Notification />)}
    </div >
  )
}





