import React, { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil';
import { todoTitleFormState } from '../../states/atoms/TodoTitleFormAtom';

export const TitleForm: React.VFC = () => {
  // useRecoilValueでtodoTitleFormStateの値を取得
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);
  // useSetRecoilStateでtodoTitleFormStateの値を更新するSetter関数を取得
  const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(todoTitleFormState);

  // テキストフィールドのonChange処理
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // 先に取得したsetTodoTitleFormValueに対して更新したい値を渡して実行
      setTodoTitleFormValue(event.target.value);
    },
    [setTodoTitleFormValue],
  );

  return (
    <label>
      タスク名:
      <input
        type='text'
        value={todoTitleFormValue}
        onChange={onChange}
        name='title'
        style={{ margin: 12 }}
      />
    </label>
  );
};
