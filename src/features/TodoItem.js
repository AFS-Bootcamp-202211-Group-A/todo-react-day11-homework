import React from "react";

export default function TodoItem(props) {
  return (
    <div>
      <input readOnly={props.readonly} value={props.title} />
    </div>
  );
}
