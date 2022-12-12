import { useState } from 'react';
import './App.css';
import TodoGenerator from './features/TodoGenerator';
import TodoGroup from './features/TodoGroup';
import TodoItem from './features/TodoItem';

function App() {

  const [itemContent, setitemContent] = useState([])

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoGroup itemContentArray={itemContent}/>
      <TodoGenerator itemContentArray={itemContent} setArray={setitemContent}/>
    </div>
  );
}

export default App;
