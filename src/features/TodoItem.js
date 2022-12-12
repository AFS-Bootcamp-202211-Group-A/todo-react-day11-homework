import React from "react";

export default function TodoItem(props) {
  return (
    <input readOnly={props.readonly} value={props.title}/>   
  );
}
