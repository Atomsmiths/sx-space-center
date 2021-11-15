import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";

async function fetcher(url: string, query: string): Promise<void> {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => {
      console.log(json);
      return json.data;
    });
}

const Home: NextPage = () => {
  const { data, error } = useSWR<any>(
    ["/api/graphql", "{ nextMission { dateUnix } }"],
    fetcher,
  );

  if (error) return <div>Failed to load</div>;

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <Head>
        <title>SpaceX Space Center</title>
        <meta name="description" content="SpaceX Space Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>SpaceX Space Center</h1>
      {data ? <p>{data.nextMission[0].dateUnix}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
