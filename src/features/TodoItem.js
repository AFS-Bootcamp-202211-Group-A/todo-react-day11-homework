import React from "react";

export default function TodoItem(props) {
  return (
    <div>
      <input readOnly={true} value={props.title} />
    </div>
  );
}
