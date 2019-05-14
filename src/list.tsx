import React, { FormEvent } from 'react';
import Todo from './models/todo';

interface Props {
  todos: Todo[];
  onRemoveTodo(key: number): void;
}

const TodoList: React.FunctionComponent<Props> = ({ onRemoveTodo, todos = [] }) => {
  const handleDeleteTodoClick = (key: number): void => onRemoveTodo(key);
  const handleDeleteTodoClick = (key: number): void => onRemoveTodo(key);

  return (
    <div className="TodoList">
      {todos.length > 0 &&
        todos.map((todo: Todo, key: number) => (
          <div key={key} className={`todo ${todo.complete ? 'todo--complete' : ''}`}>
            <div className="todo-text"> {todo.text} </div>
            <button className="todo-delete" onClick={() => handleDeleteTodoClick(key)}>
              Deletar
            </button>
            <input type="checkbox" checked={todo.complete} onChange={() => todo.toggleComplete()} />
          </div>
        ))}
    </div>
  );
};

export default TodoList;
