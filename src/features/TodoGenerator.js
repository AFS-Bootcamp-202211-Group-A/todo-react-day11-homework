import React, { useState } from "react";

export default function TodoGenerator(props) {

  const [input, setinput] = useState("");

  const addItem = (e) => {
    props.setArray([...props.itemContentArray, input]);
    setinput("");
  }  
  
  const onChange = (e) => {
    setinput(e.currentTarget.value);
}  

  return (
    <div>
      <input value={input} type="text" onChange={onChange}/>
      <button onClick={addItem}>add</button>
    </div>
  );
}
