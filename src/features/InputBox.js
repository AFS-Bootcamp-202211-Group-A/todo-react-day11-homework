import React, { useState } from 'react'

function InputBox() {
  const [message, setMessage] = useState('');
  const handleMessage = (event) => {
    setMessage(event.target.value);
  }
  const addItem = () => {
    console.log(message);
  }

  return (
    <div>
      <input type="text" onChange={handleMessage}/>
      <button onClick={addItem}>add</button>
    </div>
  )
}

export default InputBox