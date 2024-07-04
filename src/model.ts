export interface Todo{
    id: number;
    todo: string;
    completed: boolean;
}

export interface InputProps{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export interface TodoListProps{
    todos: Todo[];
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface SingleTodoProps{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}