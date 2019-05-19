import React, { FormEvent } from 'react';
import Todo from './models/todo';
import TodoComponent from './todo';

interface Props {
  todos: Todo[];
  onToggleTodo(key: number): void;
  onRemoveTodo(key: number): void;
}

const TodoList: React.FunctionComponent<Props> = ({ onRemoveTodo, onToggleTodo, todos = [] }) => (
  <section className="TodoList">
    {todos.length === 0 ? (
      <p className="TodoList--empty"> There is no todo on this app :( </p>
    ) : (
      todos.map((todo: Todo, key: number) => (
        <TodoComponent
          key={key}
          todo={todo}
          onRemoveTodo={() => onRemoveTodo(key)}
          onToggleTodo={() => onToggleTodo(key)}
        />
      ))
    )}
  </section>
);

export default TodoList;
