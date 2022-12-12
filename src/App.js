import './App.css';
import TodoGroup from './features/TodoGroup';
import TodoItem from './features/TodoItem';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoGroup/>
    </div>
  );
}

export default App;
