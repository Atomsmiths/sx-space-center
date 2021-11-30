import Image from "next/image";
import React from "react";
import useSWR from "swr";

import { UpcomingLaunches } from "@src/@types/graphql-schema";
import { LoadingComponent } from "@src/components/loading-component/loading-component";
import { TD } from "@src/components/table";
import { UPCOMING_LAUNCHES_QUERY } from "@src/graphql/launches/queries";

async function fetcher(
  url: string,
  query: string,
): Promise<UpcomingLaunches[]> {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  }).then(async (response) => {
    const unmarshalledResponse = await response.json();

    return unmarshalledResponse.data.upcomingLaunches;
  });
}

const FutureLaunches: React.FC = () => {
  const { data, error } = useSWR<UpcomingLaunches[], Error>(
    ["/api/graphql", UPCOMING_LAUNCHES_QUERY],
    fetcher,
  );

  return (
    <div className="flex flex-col justify-center items-center text-center mt-20 overflow-hidden ">
      <h2 className="mb-12">Future Launches</h2>
      {data ? (
        <table className="md:w-11/12 lg:w-3/4">
          <thead className="border-b my-12">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>
                <p className="text-s">(days:hours:mins:secs)</p>
                Countdown
              </th>
              <th>
                <p className="text-s">(UTC+0200)</p>
                Date
              </th>
              <th>Rocket</th>
              <th>Site</th>
              <th>Patch</th>
            </tr>
          </thead>
          <tbody>
            {data.map((launch) => {
              return (
                <tr
                  key={launch.id}
                  className="transition duration-500 ease-in-out hover:bg-tableRowHover"
                >
                  <TD>{launch.flightNumber}</TD>
                  <TD>{launch.name}</TD>
                  <TD>WIP</TD>
                  <TD>{launch.dateUnix}</TD>
                  <TD>{launch.rocketName}</TD>
                  <TD>{launch.launchpadRegion}</TD>
                  <TD classNames="flex items-center justify-center">
                    {launch.patch.small ? (
                      <a
                        href={launch.patch.small}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={launch.patch.small}
                          alt="mission patch"
                          width={30}
                          height={30}
                        />
                      </a>
                    ) : (
                      "TBD"
                    )}
                  </TD>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : error ? (
        <div>Failed to load</div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default FutureLaunches;
