import React from 'react'

export default function TodoItem(props) {
  return (
    <div>
    <input type="text" value={props.todo} readOnly></input>
    <br/><br/>
    </div>
  )
}

