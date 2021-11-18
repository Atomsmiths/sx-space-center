import type { NextPage } from "next";
import useSWR from "swr";

import { UpcomingLaunchCountdown } from "@src/components/upcoming-launch-countdown";
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

  return (
    <div className="mt-32">
      {data ? (
        <>
          <div className="flex text-center justify-around w-full lg:w-1/3 m-auto">
            <div className="lg:w-1/3">
              <p className="text-s lg:text-base">Launch Name</p>
              <p className="text-base lg:text-3xl">
                {data.upcomingLaunch.name}
              </p>
            </div>
            <div className="lg:w-1/3">
              <p className="text-s lg:text-base">Rocket Name</p>
              <p className="text-base lg:text-3xl">
                {data.upcomingLaunch.rocket}
              </p>
            </div>
            <div className="lg:w-1/3">
              <p className="text-s lg:text-base">Launch Site Name</p>
              <p className="text-base lg:text-3xl">
                {data.upcomingLaunch.launchpad.name}
              </p>
            </div>
          </div>
          <UpcomingLaunchCountdown dateUnix={data.upcomingLaunch.dateUnix} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
