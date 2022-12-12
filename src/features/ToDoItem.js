import React, {useState} from 'react'

export default function ToDoItem(props) {
    console.log(props.value);
    const [itemString, setItemString] = useState(props.value);
  return (
    <div style={{border: '1px solid black', width: '30%', margin: '20px', padding: '10px'}}>{itemString}</div>
  )
}
