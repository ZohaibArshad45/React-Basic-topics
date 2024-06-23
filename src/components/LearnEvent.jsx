import React from 'react'

const LearnEvent = () => {

    // without argumnet
    const handleClick1 = (e) =>{
        e.preventDefault()
        console.log("Hi there this is Click one")
    }

    // with argument
    const handleClick2 = (myName)=>{
        console.log("Hi there", myName )
    }


  return (
    <>

    {/* without argument */}
    <button onClick={handleClick1}>Click 1</button>


    {/* with argument (Function inside aur upper b bana pary ga)*/}
    <button onClick={(e)=>{handleClick2("My name is Zohaib")}}> Click 2</button>



    {/* you can also create within this, also make function upper side */}
    <button onClick={()=>{
    console.log("new click")
    }}>Click 0</button>



      
    </>
  )
}

export default LearnEvent
