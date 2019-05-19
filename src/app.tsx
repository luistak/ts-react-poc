import React, { useState } from 'react';
import Todo from './models/todo';

import './app.scss';

import Header from './header';
import List from './list';

const TodoApp: React.FunctionComponent = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const onAddTodo = (todo: Todo): void => setTodoList(todoList.concat(todo));

  const onRemoveTodo = (key: number): void => {
    const newTodoList = [...todoList];
    newTodoList.splice(key, 1);
    setTodoList(newTodoList);
  };

  const onToggleTodo = (key: number): void => {
    const newTodoList = [...todoList];
    const todo = newTodoList.find((one, index) => index === key);
    todo.toggleComplete();
    setTodoList(newTodoList);
  };

  return (
    <main className="TodoApp">
      <h1 className="TodoApp__title">Todo app</h1>
      <Header onAddTodo={onAddTodo} />
      <List todos={todoList} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />
    </main>
  );
};

export default TodoApp;
