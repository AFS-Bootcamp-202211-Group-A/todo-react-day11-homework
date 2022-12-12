import React, { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

export default function TodoList() {
  const [todoItems, setToDoItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const onNewItemChange = (nextNewItem) => {
    setNewItem(nextNewItem);
  };

  const onNewItemAdd = () => {
    setToDoItems([...todoItems, newItem]);
    setNewItem("");
  };
  return (
    <div>
      <TodoGroup todoItems={todoItems} />
      <TodoGenerator
        onNewItemAdd={onNewItemAdd}
        onNewItemChange={onNewItemChange}
        newItem={newItem}
      />
    </div>
  );
}
