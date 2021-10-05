import React from 'react';
import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil';
import { todoTitleFormState } from '../../states/atoms/TodoTitleFormAtom';
import { todoListState } from '../../states/atoms/TodoListAtom';
import type { Todo } from '../../types/Todo';

export const AddButton: React.VFC = () => {
  const todoList: Todo[] = useRecoilValue(todoListState);
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);
  const setTodoList: SetterOrUpdater<Todo[]> = useSetRecoilState(todoListState);
  const setTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(todoTitleFormState);

  const onClick = useCallback(() => {
    setTodoList([...todoList, { title: todoTitleFormValue }]);
    // タスクを追加したら入力欄は空にする
    setTitleFormValue('');
  }, [todoList, todoTitleFormValue, setTodoList, setTitleFormValue]);

  return <button onClick={onClick}>追加</button>;
};
