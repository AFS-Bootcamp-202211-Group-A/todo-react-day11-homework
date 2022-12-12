import ToDoGroup from './ToDoGroup'
import React,{useState} from 'react'
import ToDoGenerator from './ToDoGenerator';

export default function ToDoList() {
    const [contentList, setContentList] = useState(["First Item","Second Item"]);
    const addContent = (content) =>{
        setContentList([...contentList,content])
    }
  return (
    <div style = {{  margin: 30 }}>
        <ToDoGroup contentList = {contentList}/>
        <ToDoGenerator addContent={addContent} />
    </div>
  )
}
