import type { NextPage } from "next";
import useSWR from "swr";

import { Launch } from "@src/@types/graphql-schema";
import { LoadingOrbit } from "@src/components/loading-orbit/loading-orbit";
import { UpcomingLaunchCountdown } from "@src/components/upcoming-launch-countdown";
import { UPCOMING_LAUNCH_QUERY } from "@src/graphql/launches/queries";

async function fetcher(url: string, query: string): Promise<Launch> {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  }).then(async (response) => {
    const unmarshalledResponse = await response.json();

    return unmarshalledResponse.data.upcomingLaunch;
  });
}

const Home: NextPage = () => {
  const { data, error } = useSWR<Launch, Error>(
    ["/api/graphql", UPCOMING_LAUNCH_QUERY],
    fetcher,
  );

  if (error) {
    return <div>Failed to load</div>;
  }

  return (
    <div className="flex justify-center mt-40">
      <LoadingOrbit />
    </div>
  );

  // return (
  //   <div className="mt-32">
  //     {data ? (
  //       <>
  //         <div className="flex flex-row flex-wrap w-full lg:w-1/3 m-auto mb-8 lg:mb-0 text-center">
  //           <div className="w-2/4 md:w-1/3">
  //             <p className="text-m md:text-base">Launch Name</p>
  //             <p className="text-2xl md:text-3xl">{data.name}</p>
  //           </div>
  //           <div className="w-2/4 md:w-1/3">
  //             <p className="text-m md:text-base">Rocket Name</p>
  //             <p className="text-2xl md:text-3xl">{data.rocket}</p>
  //           </div>
  //           <div className="w-full md:w-1/3 mt-6 md:mt-0">
  //             <p className="text-m md:text-base">Launch Site</p>
  //             <p className="text-2xl md:text-3xl">
  //               {data.launchpad ? data.launchpad.region : "n/a"}
  //             </p>
  //           </div>
  //         </div>
  //         <UpcomingLaunchCountdown dateUnix={data.dateUnix} />
  //       </>
  //     ) : (
  //       <LoadingOrbit />
  //     )}
  //   </div>
  // );
};

export default Home;
