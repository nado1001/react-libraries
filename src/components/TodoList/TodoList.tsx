import React from 'react';
import { useRecoilValue } from 'recoil';
import { searchedTodoListSelector } from '../../states/selectors/SearchedTodoListSelector';
import type { Todo } from '../../types/Todo';

export const TodoList: React.VFC = () => {
  // useRecoilValueにsearchedTodoListSelectorを渡す
  // 返される値はsearchedTodoListSelectorのget()で定義した通りTodo[]
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);
  return (
    <div>
      <p>タスク一覧</p>
      <ul>
        {list.map((todo: Todo, i: number) => {
          return <li key={`${todo.title}_${i}`}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};
