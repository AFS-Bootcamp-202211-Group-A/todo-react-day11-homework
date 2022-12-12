import './App.css';
import ToDoItem from './feature/ToDoItem';
import ToDoGroup from './feature/ToDoGroup'
import React,{useState} from 'react'
import ToDoGenerator from './feature/ToDoGenerator';

function App() {
  
  const [contentList, setContentList] = useState(Array(0));
  const addContent = (content) =>{
      setContentList([...contentList,content])
      // console.log(contentList)
  }

  return (
    <div className="App">
      <ToDoGroup contentList = {contentList}/>
      <ToDoGenerator addContent={addContent}/>
    </div>
  );
}

export default App;
