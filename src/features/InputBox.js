import React, { useState } from 'react'

function InputBox(props) {
  const {updateMessageList} = props;
  const [message, setMessage] = useState('');
  const handleMessage = (event) => {
    setMessage(event.target.value);
  }
  const addItem = () => {
    updateMessageList(message);
  }

  return (
    <div>
      <input type="text" onChange={handleMessage}/>
      <button onClick={addItem}>add</button>
    </div>
  )
}

export default InputBox