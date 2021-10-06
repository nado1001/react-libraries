import React from 'react';
import useSWR from 'swr';

// function Profile() {
//   const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts');

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }

type user = {
  userid: number;
  id: number;
  title: string;
};

const fetcher = async (url: string): Promise<user[]> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error();
  const json = response.json();
  return json;
};

const Swr: React.VFC = () => {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);
  console.log(data);

  if (!data) return <div>loading...</div>;
  if (data.length === 0) return <div>データは空です</div>;
  if (error) return <div>エラーが発生したため、データの取得に失敗しました</div>;

  return (
    <div style={{ margin: 12 }}>
      <ul>
        {data.map((res: user, index: number) => (
          <li key={index}>{res.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Swr;
