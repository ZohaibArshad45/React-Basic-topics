import React, { useState } from 'react'

const LearnConditionalRender = () => {
    // one condition
    const status = true

    // if else condition
    const [isLogin, setisLogin] = useState(false);

    // on click btn change condition
    const [loginbtn, setloginbtn] = useState(false);

    const handleLogout = () => {
        setloginbtn(false)
    }

    return (
        <>
            {/* one condition */}
            {status && <h1>CodingSkillUP</h1>}

            {/* if else condition */}
            {isLogin ? (<> <h1> Yes</h1> <h2>Thanks</h2></>) : (<> <h1> No</h1> <h2>Again try</h2></>)}

            {/* on click btn change condition */}
            {loginbtn ?
                (<> <h2> Are you want to logout: <button onClick={handleLogout}>Logout</button></h2></>)
                :
                (<><h2>Are you want to login: <button onClick={() => { setloginbtn(true) }}>login</button></h2></>)}


        </>
    )
}

export default LearnConditionalRender
