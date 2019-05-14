import React, { ChangeEvent, FormEvent, useState } from 'react';
import Todo from './models/todo';

type SubmitEvent = FormEvent<HTMLFormElement>;
type ChangeEventForm = ChangeEvent<HTMLInputElement>;

interface Props {
  onAddTodo(todo: Todo): void;
}

const TodoHeader: React.FunctionComponent<Props> = ({ onAddTodo }) => {
  const [text, setText] = useState<string>('');

  const handleInputChange = (event: ChangeEventForm) => {
    const {
      target: { value },
    } = event;

    setText(value);
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    onAddTodo(new Todo(text));
  };

  return (
    <div className="TodoHeader">
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default TodoHeader;
