import React, {useState} from 'react'
import ToDoItem from './ToDoItem';

export default function ToDoGroup(props) {
    console.log('TODOFROUP: '+props.array);
    
    return props.array.map((item, index) => {
        return <ToDoItem value={item} key={index}/>;
    }
    )
}

