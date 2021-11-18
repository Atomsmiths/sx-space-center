import type { NextPage } from "next";
import useSWR from "swr";

import { UPCOMING_LAUNCH_QUERY } from "@src/graphql/launches/queries";

async function fetcher(url: string, query: string): Promise<void> {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json.data;
    });
}

const Home: NextPage = () => {
  const { data, error } = useSWR<any>(
    ["/api/graphql", UPCOMING_LAUNCH_QUERY],
    fetcher,
  );

  if (error) return <div>Failed to load</div>;

  console.log(data && data.upcomingLaunch);
  return (
    <div>
      {data ? (
        <div className="flex">
          <div>
            <p>Launch Name</p>
            <p>{data.upcomingLaunch.name}</p>
          </div>
          <div>
            <p>Rocket Name</p>
            <p>{data.upcomingLaunch.rocket}</p>
          </div>
          <p>{data.upcomingLaunch.rocket}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
