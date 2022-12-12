import './App.css';
import TodoGenerator from './features/TodoGenerator';
import TodoGroup from './features/TodoGroup';
import TodoItem from './features/TodoItem';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoGroup/>
      <TodoGenerator/>
    </div>
  );
}

export default App;
