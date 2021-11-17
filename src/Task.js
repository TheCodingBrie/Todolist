import React from 'react'

export default function Task({task}) {
    console.log(task)
    return (
        <div className="card">
            <div>{task.id}</div>
            <div>{task.state}</div>
        </div>
    )
}
