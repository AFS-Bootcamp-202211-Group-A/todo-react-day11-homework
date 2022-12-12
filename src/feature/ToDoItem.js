import React,{useState} from 'react'

export default function ToDoItem(props) {
    
    return (
    <div style={{border: '2px solid black'}}>
        <h5>
            {props.content}
        </h5>
    </div>
  )
}
