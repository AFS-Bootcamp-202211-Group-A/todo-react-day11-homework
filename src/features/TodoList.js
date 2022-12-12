import React, {useState} from 'react'
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

export default function TodoList() {
    const [todoList,setTodoList] = useState([]);

    const add = (todo) =>{
        setTodoList([...todoList,todo]);
    }
  
    return (
      <div>
        <h1>Todo List</h1>
        <TodoGroup todoList={todoList}/>
        <TodoGenerator add={add}/>
      </div>
    )
}
