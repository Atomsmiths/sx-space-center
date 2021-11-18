import type { NextPage } from "next";
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
      return res.json();
    })
    .then((json) => {
      return json.data;
    });
}

const UPCOMING_MISSION_QUERY = `
  query upcomingMission {
    upcomingMission {
      name
      dateUnix
      rocket
      patch {
        small
        large
      }
    }
  }
`;

const Home: NextPage = () => {
  const { data, error } = useSWR<any>(
    ["/api/graphql", UPCOMING_MISSION_QUERY],
    fetcher,
  );

  if (error) return <div>Failed to load</div>;

  return (
    <div>
      {data ? (
        <div>
          <p>{data.upcomingMission.name}</p>
          <p>{data.upcomingMission.dateUnix}</p>
          <p>{data.upcomingMission.rocket}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
