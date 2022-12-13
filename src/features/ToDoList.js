import React, { useState } from 'react';
import ToDoGenerator from './ToDoGenerator';
import ToDoGroup from './ToDoGroup';

export default function ToDoList() {

    const [array, setArray] = useState([]);

    const updateArray = (item) => {
        setArray(array.concat(item));
    }
  return (
    <div>      
        <ToDoGroup array = {array}/>
        <ToDoGenerator updateArray1 = {updateArray}/>
    </div>
  )
}
