import React from 'react'

export default function todo({todo,onDelete}) {
    let TodoStyle = {
        marginBottom : "22px"
    }
    return (
        <div style = {TodoStyle}>
            <h3>{todo.slno}</h3>
            <p>{todo.title}</p>
            <button className="btn btn-sm btn-danger" onClick = {() => {onDelete(todo)}}>Delete</button>
        </div>
    )
}
