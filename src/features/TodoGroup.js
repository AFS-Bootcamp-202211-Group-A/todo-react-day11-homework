import React from 'react'
import TodoItem from './TodoItem';


export default function TodoGroup(props) {

    const todoMap = props.todoList;
    return todoMap.map((item, index) => {
        return <TodoItem key={index} todo={item} />

    })
}
