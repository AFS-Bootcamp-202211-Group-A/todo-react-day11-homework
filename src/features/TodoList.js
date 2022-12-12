import React, {useState} from 'react'
import TodoGroup from './TodoGroup';

export default function TodoList() {
    const [size, setSize] = useState(3);
  
    return (
      <div>
        <h1>Todo List</h1>
        <TodoGroup size={size}/>
      </div>
    )
}
