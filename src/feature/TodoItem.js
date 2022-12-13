import React from "react";

export default function TodoItem(props) {
  const todoItemStyle = {
    border: "1px solid black",
    padding: "5px",
    margin: "20px 40px",
  };
  return <div style={todoItemStyle}>{props.message}</div>;
}
