import React from "react";

export default function TodoItem(props) {
  const { item } = props;
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "3px",
        textAlign: "left",
        padding: "5px",
      }}
    >
      {item}
    </div>
  );
}
