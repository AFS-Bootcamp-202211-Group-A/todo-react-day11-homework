import React from 'react'
import TodoItem from './TodoItem'

export default function TodoGroup(props) {
  const messageMap = Array(props.message).fill(0)
  return messageMap.map((item, index) => {
    return <TodoItem key={index}/>
  })
}
