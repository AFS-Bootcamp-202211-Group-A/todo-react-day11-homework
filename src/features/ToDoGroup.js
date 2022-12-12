import React from "react";
import ToDoItem from "./TodoItem";

export default function TodoGroup(props) {
  const { toDoItems } = props;
  return (
    <div>
      {toDoItems.map((item, index) => (
        <ToDoItem item={item} key={`item-${index}`} />
      ))}
    </div>
  );
}
