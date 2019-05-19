import React, { FormEvent } from 'react';
import Todo from './models/todo';

interface Props {
  todo: Todo;
  onToggleTodo(): void;
  onRemoveTodo(): void;
}

const TodoComponent: React.FunctionComponent<Props> = ({ onRemoveTodo, onToggleTodo, todo }) => (
  <div className="Todo">
    <div className="todo-text"> {todo.text} </div>
    <button className="todo-delete" onClick={onRemoveTodo}>
      Deletar
    </button>
    <input type="checkbox" checked={todo.complete} onChange={onToggleTodo} />
  </div>
);

export default TodoComponent;
