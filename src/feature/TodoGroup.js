import React from "react";
import TodoItem from "./TodoItem";

export default function TodoGroup(props) {
  return props.messages.map((message, index) => {
    return <TodoItem key={index} message={message} />;
  });
}
