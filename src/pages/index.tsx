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
          <div className="flex flex-row flex-wrap justify-between w-full lg:w-1/3 m-auto mb-8 lg:mb-0 text-center">
            <div className="w-2/4 lg:w-1/3">
              <p className="text-m lg:text-base">Launch Name</p>
              <p className="text-2xl lg:text-3xl">{data.upcomingLaunch.name}</p>
            </div>
            <div className="w-2/4 lg:w-1/3">
              <p className="text-m lg:text-base">Rocket Name</p>
              <p className="text-2xl lg:text-3xl">
                {data.upcomingLaunch.rocket}
              </p>
            </div>
            <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
              <p className="text-m lg:text-base">Launch Site Name</p>
              <p className="text-2xl lg:text-3xl">
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
