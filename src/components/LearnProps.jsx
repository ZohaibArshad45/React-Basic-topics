import React from 'react'

const LearnProps = (props) => {
  return (
    <>
    <h1>Learn about Props</h1>
    <p>Props mean we get data from parents to child by using Props</p>
    <p>My name is {props.name}, This value get by Props</p>
    <p>My Roll number is {props.RollNumber}</p>
      
    </>
  )
}

export default LearnProps
