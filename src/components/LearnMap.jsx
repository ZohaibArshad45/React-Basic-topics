import React from 'react'

const LearnMap = () => {
    const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5',]
    return (
        <>
            {
                items.map((item, i) => (
                    <li key={i}> {item}</li>
                ))
            }
        </>
    )
}

export default LearnMap
