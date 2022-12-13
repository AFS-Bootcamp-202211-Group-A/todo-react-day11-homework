import React, { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

export default function TodoList() {
  const [messages, setMessages] = useState([]);
  const updateMessages = (newMessage) => {
    setMessages([...messages, newMessage]);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoGroup messages={messages} />
      <TodoGenerator updateMessages={updateMessages} />
    </div>
  );
}
