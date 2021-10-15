import type { VFC } from 'react';
import cc from 'classcat';

type Props = { color: 'red' | 'blue' };

export const Button: VFC<Props> = (props) => {
  return (
    <button
      className={cc([
        {
          ['text-red-900']: props.color === 'red',
          ['text-blue-900']: props.color === 'blue',
        },
      ])}
    >
      <span>ボタン</span>
    </button>
  );
};
