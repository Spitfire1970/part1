// const Header = (props) => {return (<h1>{props.name}</h1>)}
// const Content = (props) => {const {parts}=props 
// return (<ul>{parts.map(part=><Part subparts = {part}/>)}</ul>)}
// // const Total = (props) => {return (<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>)}
// const Part = (props) => {return (<li key = {props.subparts.id}>{props.subparts.name} {props.subparts.exercises}</li>)}
// const Course = (props) => {const {course}=props
//   return (<div>
//   <Header name={course.name} />
//   <Content parts={course.parts} />
//   {/* <Total parts={course.parts} /> */}
// </div>)}

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id:1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id:2
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id:3       
//       }
//     ]
//   }

//   return <Course course={course} />
// }

import { useState } from 'react'
const Button = (props) => <button onClick = {props.handleClick}> {props.text}</button>
const Statistics = (props) => {return (<><StatisticLine text = {props.txt} stat = {props.st}/>
<StatisticLine text = {props.g} stat = {props.gg}/>
<StatisticLine text = {props.n} stat = {props.nn}/>
<StatisticLine text = {props.b} stat = {props.bb}/>
<StatisticLine text = {props.a} stat = {props.aa}/>
<StatisticLine text = {props.avg} stat = {props.av}/>
<StatisticLine text = {props.p} stat = {props.pp}/></>)}
const StatisticLine = (props) => <>{props.text} {props.stat}<br/></>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const onGood = () => {
    setGood(good + 1)
  }
  const onNeutral = () => {
    setNeutral(neutral + 1)
  }
  const onBad = () => {
    setBad(bad + 1)
  }
  if (good+neutral+bad === 0){
    return( <>
      <h1>give feedback</h1>
      <button onClick = {onGood}>good</button>
      <button onClick = {onNeutral}>neutral</button>
      <button onClick = {onBad}>bad</button>
      <h1>statistics</h1>
    <p>No feedback given</p>
    </>)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {onGood}>good</button>
      <button onClick = {onNeutral}>neutral</button>
      <button onClick = {onBad}>bad</button>
      <h1>statistics</h1>
      <Statistics g="good"n="neutral"b="bad"a="all"avg="average"p="positive"gg={good}nn={neutral}bb={bad}aa={good+neutral+bad}av={(good*1+bad*-1)/10}pp={good*100/(good+neutral+bad)}/>
   </div>
  )
}

// import { useState } from 'react'

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
//     'The only way to go fast, is to go well.'
//   ]
   
//   const [selected, setSelected] = useState(0)

//   return (
//     <div>
//       {anecdotes[selected]}
//       <br></br>
//       <button onClick ={()=>  {setSelected(Math.round(Math.random()*anecdotes.length))}}>next anecdote</button>
//     </div>
//   )
// }

// import { useState } from 'react'

// const App = (props) => {
//   const { notes } = props

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <li>{note.content}</li>)}
//       </ul>
//     </div>
//   )
// }

export default App
