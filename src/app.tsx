import React, { useState } from 'react';
import Todo from './models/todo';

import './app.scss';

import Header from './header';
import List from './list';

const TodoApp: React.FunctionComponent = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const onAddTodo = (todo: Todo): void => setTodoList(todoList.concat(todo));

  const onRemoveTodo = (key: number): void => {
    const newTodoList: Todo[] = [...todoList];
    newTodoList.splice(key, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className="TodoApp">
      <h1>My Todo app</h1>
      <Header onAddTodo={onAddTodo} />
      <List todos={todoList} onRemoveTodo={onRemoveTodo} />
    </div>
  );
};

export default TodoApp;
