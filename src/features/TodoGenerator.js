import React from "react";

export default function TodoGenerator(props) {
  const { newItem, onNewItemChange, onNewItemAdd } = props;

  const handleNewItemChange = (event) =>{
    onNewItemChange(event.target.value);
  }
  return (
    <div>
      <input type="text" value={newItem} onChange={handleNewItemChange} />
      <button
        type="button"
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={onNewItemAdd}
      >
        add
      </button>
    </div>
  );
}
