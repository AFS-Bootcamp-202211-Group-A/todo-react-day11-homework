import React,{useState} from 'react'

export default function ToDoItem(props) {
    
    return (
    <div style={{border: '2px solid black' , margin: 30 }}>
        <h5>
            {props.content}
        </h5>
    </div>
  )
}
