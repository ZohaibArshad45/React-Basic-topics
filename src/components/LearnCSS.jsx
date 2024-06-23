import React from 'react'


const LearnCSS = () => {

    const anotherWayCSS = {
        color: 'blue',
        backgroundColor: 'orange'

    }
    return (
        <>
            {/* inline CSS */}
            <p style={{ 'fontSize': '20px', 'color': 'red' }}>Hi there Wellcome to codingskill UP</p>

            {/* other way inline CSS, make upper sider */}
            <p style={anotherWayCSS}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sit officiis explicabo tempora vel numquam praesentium omnis nihil nostrum suscipit, voluptas eligendi maxime minima at ab iure? Quaerat, voluptas inventore!</p>


        </>
    )
}

export default LearnCSS
