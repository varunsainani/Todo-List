import { TodoListProps } from '../model'
import SingleTodo from './SingleTodo';

const TodoList = ({todos, setTodos}: TodoListProps) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (<SingleTodo
        todo={todo}
        key={todo.id}
        todos={todos}
        setTodos={setTodos}
        />))}
    </div>
  )
}

export default TodoList