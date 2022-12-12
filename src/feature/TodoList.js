import React, { useState } from 'react'
import TodoGenerator from './TodoGenerator'
import TodoGroup from './TodoGroup'

export default function TodoList() {
  const [number, setNumber] = useState(10);
  return (
    <div>
      <h1>Todo List</h1>
      <TodoGroup number={number}/>
      <TodoGenerator />
    </div>
  )
}
