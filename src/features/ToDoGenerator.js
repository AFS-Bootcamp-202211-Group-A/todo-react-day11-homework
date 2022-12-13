import React, {useState} from 'react'
import ToDoList from './ToDoList';

export default function ToDoGenerator(props) {
    const {updateArray1} = props;
    const [text, setText] = useState("");

    const handleAddText = () => {
        updateArray1(text);
    }

    const handleChangeText = (event) => {
        setText(event.target.value);
    }

  return (
    <div>
        <input value={text} onChange={handleChangeText}></input>
        <button onClick={handleAddText}>add</button>
    </div>
  )
}

