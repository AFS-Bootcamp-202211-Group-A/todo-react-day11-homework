import React, { useRef } from "react";

export default function TodoGenerator(props) {
  const inputRef = useRef(null);
  const addNewMessage = () => {
    const inputValue = inputRef.current.value;
    if (inputValue.length !== 0) {
      props.updateMessages(inputValue);
    }
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={addNewMessage}>add</button>
    </div>
  );
}
