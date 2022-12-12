import React, { useState } from "react";

export default function TodoGenerator() {

  const [input, setinput] = useState("");

  const addItem = (e) => {
      console.log(input);
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
