import React from 'react';
import { TitleForm, TodoList, SearchForm, AddButton } from '../components/TodoList';

const Todo: React.VFC = () => {
  return (
    <div style={{ margin: 12 }}>
      <div>
        <TitleForm />
        <AddButton />
      </div>
      <SearchForm />
      <TodoList />
    </div>
  );
};

export default Todo;
