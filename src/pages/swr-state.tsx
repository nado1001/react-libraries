import useSWRImmutable from 'swr/immutable';

/**
 * SWRでグローバルステートを作成するための共通関数
 *
 * @param {string} key -ステート毎に所持するキー
 * @param {any} fallbackData -ステートの初期値
 */
const useSharedState = (key: string, fallbackData: any) => {
  const { data, mutate } = useSWRImmutable(key, { fallbackData });
  return [data, mutate];
};

const useCounter = () => {
  const [count, setCount] = useSharedState('counter', 0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return { count, handleIncrement };
};

const ChildrenA = () => {
  const { count } = useCounter();
  return <div className='text-red-800'>{count}</div>;
};

const ChildrenB = () => {
  const { count, handleIncrement } = useCounter();

  return (
    <div className='text-blue-800'>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

const SwrState: React.VFC = () => {
  return (
    <>
      <ChildrenA />
      <ChildrenB />
    </>
  );
};

export default SwrState;
