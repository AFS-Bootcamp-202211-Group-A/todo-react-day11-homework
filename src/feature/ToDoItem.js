import React,{useState} from 'react'

export default function ToDoItem() {
    const [content, setContent] = useState("Hi");
    return (
    <div style={{border: '2px solid black'}}>
        <h5>
            {content}
        </h5>
    </div>
  )
}
