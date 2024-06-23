import React from 'react'

const LearnLiftingStandUp = (props) => {

    const handleClick = (e)=>{
        e.preventDefault()
        const dt = "I am Software Engineer"
        // console.log("hhhh")
        props.kuchbhi(dt)
    }

  return (
    <>
    <p>By Props we can send data form parents to child, But by LiftingStandUp we can send data from chlid t parents</p>
    <button onClick={handleClick}>Click</button>
    </>
  )
}

export default LearnLiftingStandUp
