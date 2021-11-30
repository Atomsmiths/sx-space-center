import type { NextPage } from "next";
import useSWR from "swr";

import { UpcomingLaunch } from "@src/@types/graphql-schema";
import { LoadingComponent } from "@src/components/loading-component/loading-component";
import { UpcomingLaunchCountdown } from "@src/components/upcoming-launch-countdown";
import { UPCOMING_LAUNCH_QUERY } from "@src/graphql/launches/queries";

const Home: NextPage = () => {
  const { data, error } = useSWR<UpcomingLaunch, Error>([
    UPCOMING_LAUNCH_QUERY,
    "upcomingLaunch",
  ]);

  if (error) {
    return <div>Failed to load</div>;
  }

  return (
    <div className="mt-32">
      {data ? (
        <>
          <div className="flex flex-row flex-wrap w-full lg:w-1/3 m-auto mb-8 lg:mb-0 text-center">
            <div className="w-2/4 md:w-1/3">
              <p className="text-m md:text-base">Launch Name</p>
              <p className="text-2xl md:text-3xl">{data.name}</p>
            </div>
            <div className="w-2/4 md:w-1/3">
              <p className="text-m md:text-base">Rocket Name</p>
              <p className="text-2xl md:text-3xl">{data.rocketName}</p>
            </div>
            <div className="w-full md:w-1/3 mt-6 md:mt-0">
              <p className="text-m md:text-base">Launch Site</p>
              <p className="text-2xl md:text-3xl">
                {data.launchpadRegion ? data.launchpadRegion : "n/a"}
              </p>
            </div>
          </div>
          <UpcomingLaunchCountdown dateUnix={data.dateUnix} />
        </>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default Home;
