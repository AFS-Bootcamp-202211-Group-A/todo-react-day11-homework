import React from "react";

export default function TodoItem(props) {
  return (
    <div id="inputBox">
      <input id="inputText" readOnly={true} value={props.title} />
    </div>
  );
}
