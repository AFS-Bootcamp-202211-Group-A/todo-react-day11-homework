import React from 'react'

export default function ToDoItem(props) {
    const { item } = props;
  return (
    <div style={{border: "3px solid black"}}>{item}</div>
  )
}
