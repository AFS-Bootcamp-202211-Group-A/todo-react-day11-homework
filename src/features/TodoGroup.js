import React from 'react'
import TodoItem from './TodoItem';


export default function TodoGroup(props) {
    console.log(props.size);

    const todoMap = Array(props.size).fill(0);
    return todoMap.map((item, index) => {
        return <TodoItem />;

    })
}
