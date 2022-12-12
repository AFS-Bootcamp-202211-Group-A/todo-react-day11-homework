import React from 'react'
import TodoGenerator from './TodoGenerator'
import TodoGroup from './TodoGroup'

export default function TodoList() {
  return (
    <div>
      Todo List
      <TodoGroup />
      <TodoGenerator />
    </div>
  )
}
