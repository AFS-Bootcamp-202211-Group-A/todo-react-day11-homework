import React, { useState }  from 'react'

export default function TodoGenerator(props) {

    const[todo,setTodo] = useState("");

    const add = () =>{
        if(todo !== ""){
            props.add(todo);
            setTodo("");
        }
    }

    const setTodoValue = (event) => {
        setTodo(event.target.value)    
    }

  return (
    <div>
        <input type="text" value={todo} onChange={setTodoValue} ></input>
        <button id="blueButton" onClick={add}>add</button>
    </div>
  )
}
