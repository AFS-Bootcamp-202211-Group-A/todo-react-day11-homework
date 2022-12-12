import React from 'react'
import TodoItem from './TodoItem';

export default function TodoGroup(props) {

  return (
    props.itemContentArray.map((item, index) =>{
      return <TodoItem key={index} title={item}/>;
    })
  );
}
