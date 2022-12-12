import React from "react";

export default function TodoGenerator(props) {
  const { newItem, onNewItemChange, onNewItemAdd } = props;
  return (
    <div>
      <input type="text" value={newItem} onChange={onNewItemChange} />
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
