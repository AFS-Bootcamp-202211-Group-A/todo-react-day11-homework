import './App.css';
import ToDoItem from './feature/ToDoItem';
import ToDoGroup from './feature/ToDoGroup'
import React,{useState} from 'react'

function App() {
  
  return (
    <div className="App">
      <ToDoGroup/>
    </div>
  );
}

export default App;
