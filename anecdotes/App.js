import React, { useState } from 'react'

const Statistics = ({points}) => {
  return (
    <div>
      This anecdote has {points} vote(s)
    </div>
  )
}

const Display = ({anecdote}) => {
  return (<div>
    <h3>Anedote of the day</h3>
    {anecdote}
  </div>
  )
}

const DisplayMostVoted = ({anecdotes, points}) => {
  const mostVoted = points.indexOf(Math.max(...points))
  return(
    <div>
      <h3>Most voted anecdote</h3>
      {anecdotes[mostVoted]}
      <p>This anecdote has {points[mostVoted]} vote(s)</p>
    </div>
  )
} 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])

  const handleNextClick = () => {
    const newAnecdote = Math.ceil(Math.random()*anecdotes.length)-1
    setSelected(newAnecdote)
  }

  const handleVoteCLick  = () => {
    const newVote = [...points]
    newVote[selected]++
    setPoints(newVote)
  }


  return (
    <div>
      <Display anecdote={anecdotes[selected]} />
      <Statistics points={points[selected]} />
      <button onClick={handleNextClick}>Next anecdote</button>
      <button onClick={handleVoteCLick}>Vote</button>
      <DisplayMostVoted anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App