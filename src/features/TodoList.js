import React, { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

export default function TodoList() {
  const [toDoItems, setToDoItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const onNewItemChange = (nextNewItem) => {
    setNewItem(nextNewItem);
  };

  const onNewItemAdd = () => {
    setToDoItems([...toDoItems, newItem]);
    setNewItem("");
  };
  return (
    <div>
      <TodoGroup toDoItems={toDoItems} />
      <TodoGenerator
        onNewItemAdd={onNewItemAdd}
        onNewItemChange={onNewItemChange}
        newItem={newItem}
      />
    </div>
  );
}
