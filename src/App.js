import './App.css';
import ToDoItem from './feature/ToDoItem';
import ToDoGroup from './feature/ToDoGroup'
import React,{useState} from 'react'
import ToDoGenerator from './feature/ToDoGenerator';

function App() {
  
  return (
    <div className="App">
      <ToDoGroup/>
      <ToDoGenerator/>
    </div>
  );
}

export default App;
