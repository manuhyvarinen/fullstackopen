import { useState } from 'react'

const StatisticsLine = ({text, value,}) => {
  if (text ==='positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  let all = good + bad+ neutral
  let average = (good-bad) / all
  let positive = (good/all) *100

  if (all===0){
    return (
      <div>No feedback given</div>
    )
  }
  else
  return(
    <table>
      <tbody>
        <StatisticsLine text='good' value={good} />
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad' value={bad} />
        <StatisticsLine text='all' value={all}/>
        <StatisticsLine text='average' value={average}/>
        <StatisticsLine text='positive' value={positive}/>
      </tbody>
    </table>
  )
}

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.txt}
  </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={ () => setGood(good+1)} txt='Good'/>
      <Button handleClick={ () => setNeutral(neutral+1)} txt='Neutral'/>
      <Button handleClick={ () => setBad(bad+1)} txt='Bad'/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App