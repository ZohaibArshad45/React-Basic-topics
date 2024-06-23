import React, { useState } from 'react'


const LearnState = () => {
   
    // const [ currentValue, Function]= useState(78)
    const [num, setNum] = useState(8)
    // console.log(num)

    // also create array [], 
    const [postion, setpostion] = useState([1,2,3,4,44]);
    // console.log(postion)

    // Objects {}
    const [angel, setangel] = useState({x:5 , y:10, z:15});
    // console.log(angel.x)

     const handleClick1 = ()=>{
        setNum(num +1)
     }

     const handleClick2 = ()=>{
        setNum(num -1)
     }

    return (
        <>
            <h1>Learn Use State</h1>
            <p>Current Number is {num}</p>

            {/* <button onClick={() => {
                setNum(num + 1)
            }}>Increase</button> */}

            <button onClick={handleClick1}>Incerease</button>
            <button onClick={handleClick2}>Decerease</button>


            {/* Array */}
            <h4>Postion arrays {postion}</h4>

            {/* objects */}
            <h4>Object X {angel.x}</h4>
            <h4>Object Y {angel.y}</h4>
            <h4>Object Z {angel.z}</h4>

        </>
    )
}

export default LearnState
