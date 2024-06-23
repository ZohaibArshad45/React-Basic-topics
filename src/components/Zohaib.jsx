import React from 'react'

const Zohaib = (props) => {

const clickbtn =()=>{
    let data2 ="Ok ho gya"
    props.axha(data2)
}



  return (
    <>
    <h1>Hi there</h1>
    <button onClick={clickbtn}>Click</button>
      
    </>
  )
}

export default Zohaib
