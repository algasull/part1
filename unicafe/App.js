import React, { useState } from 'react'

const Statistics = ({value, text}) => {
  return(
    <div>
      {text} {value}
    </div>
  )
}

  
const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


const App = () => {

  const [feedbacks, setFeedbacks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    const newFeedbacks = {
      ...feedbacks,
      good: feedbacks.good + 1
    }
    setFeedbacks(newFeedbacks)
  }

  const handleNeutralClick = () => {
    const newFeedbacks = {
      ...feedbacks,
      neutral: feedbacks.neutral + 1
    }
    setFeedbacks(newFeedbacks)
  }

  const handleBadClick = () => {
    const newFeedbacks = {
      ...feedbacks,
      bad: feedbacks.bad + 1
    }
    setFeedbacks(newFeedbacks)
  }
if ((feedbacks.good + feedbacks.neutral + feedbacks.bad)===0) {
  return (<div>
      <div>
        <h3>Give Feedback</h3>
        <Button handleClick={handleGoodClick} text='Good' />
        <Button handleClick={handleNeutralClick} text='Neutral' />   
        <Button handleClick={handleBadClick} text='Bad' />
      </div>
      <div>
        <h3>Statistics</h3>
          No Feedback data is available yet
      </div>
  </div>
  )
} else {
  return (
    <div>
      <div>
        <h3>Give Feedback</h3>
        <Button handleClick={handleGoodClick} text='Good' />
        <Button handleClick={handleNeutralClick} text='Neutral' />   
        <Button handleClick={handleBadClick} text='Bad' />
      </div>
      <div>
          <h3>Statistics</h3>
          <Statistics value={feedbacks.good} text='Times reported Good' />
          <Statistics value={feedbacks.neutral} text='Times reported Neutral' />
          <Statistics value={feedbacks.bad} text='Times reported Bad' />
          <Statistics value={(feedbacks.good - feedbacks.bad)/(feedbacks.good + feedbacks.neutral + feedbacks.bad)} text="Average score" />
          <Statistics value={(100*feedbacks.good/(feedbacks.good + feedbacks.neutral + feedbacks.bad))} text="Percentage of positive ratings" />
      </div>
    </div>
  )
}
  
}
export default App