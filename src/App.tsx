import { useState } from 'react';
import './App.css'
import Input from './components/Input';
import { Todo } from './model';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, completed: false}]);
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className='App'>
      <h2 className='heading'>TodoList</h2>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App
