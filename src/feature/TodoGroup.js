import React from 'react'
import TodoItem from './TodoItem'

export default function TodoGroup(props) {
  const numberMap = Array(props.number).fill(0)
  return numberMap.map((item, index) => {
    return <TodoItem />
  })
}
