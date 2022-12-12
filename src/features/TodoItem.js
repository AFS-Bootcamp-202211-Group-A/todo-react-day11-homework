import React from 'react'

export default function TodoItem(props) {
  return (
    <div>
    <input type="text" value={props.todo}></input>
    <br/><br/>
    </div>
  )
}

