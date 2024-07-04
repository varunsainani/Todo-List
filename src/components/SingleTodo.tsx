import { FaEdit } from "react-icons/fa"
import { SingleTodoProps } from "../model"
import { MdDelete, MdOutlineDownloadDone } from "react-icons/md"
import { useEffect, useRef, useState } from "react"
import "./style.css"

const SingleTodo = ({todo, todos, setTodos}: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map((todo) => (todo.id===id?{...todo, todo:editTodo}: todo)));

    setEdit(false);
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleComplete = (id: number) => {
    setTodos(todos.map((todo) => todo.id===id?{...todo, completed:!todo.completed}: todo))
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todosSingle" onSubmit={(e) => handleEdit(e, todo.id)}>
      {
        edit? (
          <input className="todosSingleText" value={editTodo} ref={inputRef} onChange={(e) => {setEditTodo(e.target.value)}}/>
        ):(
            todo.completed?(
              <s className="todosSingleText">{todo.todo}</s>
            ):(
              <span className="todosSingleText">{todo.todo}</span>
            )
        )
      }
      
      <div className="reactIcons">
        <span className="icon" onClick={() => {if(!edit && !todo.completed){setEdit(!edit)}}}><FaEdit /></span>
        <span className="icon" onClick={() => handleDelete(todo.id)}><MdDelete /></span>
        <span className="icon" onClick={() => handleComplete(todo.id)}><MdOutlineDownloadDone /></span>
      </div>
    </form>
  )
}

export default SingleTodo