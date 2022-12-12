import React from 'react'
import TodoItem from './TodoItem';

export default function TodoGroup() {
  const itemContentArray = ["test", "more test", "a", "b"];

  return (
    itemContentArray.map((item, index) =>{
      return <TodoItem title={item}/>;
    })
  );
}
