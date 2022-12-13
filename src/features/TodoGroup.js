import React from "react";
import TodoItem from "./TodoItem";

export default function TodoGroup(props) {
  const { todoItems } = props;
  return (
    <div>
      {todoItems.map((item, index) => (
        <TodoItem item={item} key={`item-${index}`} />
      ))}
    </div>
  );
}
