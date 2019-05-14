import React, { ChangeEvent, FormEvent, useState } from 'react';
import Todo from './models/todo';

type SubmitEvent = FormEvent<HTMLFormElement>;

interface Props {
  todos: Todo[];
  onRemoveTodo(key: number): void;
}

const TodoList: React.FunctionComponent<Props> = ({ onRemoveTodo, todos = [] }) => {
  const handleDeleteTodoClick = (key: number) => onRemoveTodo(key);

  return (
    <div className="TodoList">
      {todos.length > 0 &&
        todos.map((todo: Todo, key: number) => (
          <div key={key}>
            <div> {todo.text} </div>
            <button onClick={() => handleDeleteTodoClick(key)}> Deletar </button>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
