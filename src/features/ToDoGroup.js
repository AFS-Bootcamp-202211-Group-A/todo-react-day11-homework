import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoGroup(props) {
  const { toDoItems } = props;
  return (
    <div>
      {toDoItems.map((item, index) => (
        <ToDoItem item={item} key={`item-${index}`} />
      ))}
    </div>
  );
}
