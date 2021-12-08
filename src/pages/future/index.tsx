import Image from "next/image";
import React from "react";
import useSWR from "swr";

import { UpcomingLaunches } from "@src/@types/graphql-schema";
import { TableCountdown } from "@src/components/countdown/table-countdown";
import { LoadingComponent } from "@src/components/loading-component/loading-component";
import { TD, TH } from "@src/components/table";
import { UPCOMING_LAUNCHES_QUERY } from "@src/graphql/launches/queries";

const FutureLaunches: React.FC = () => {
  const [currentTime, setCurrentTime] = React.useState(
    Math.floor(Date.now() / 1000),
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { data, error } = useSWR<UpcomingLaunches[], Error>([
    UPCOMING_LAUNCHES_QUERY,
    "upcomingLaunches",
  ]);

  return (
    <div className="flex flex-col justify-center items-center text-center mt-20 overflow-hidden flex-wrap">
      <h2 className="mb-12">Future Launches</h2>
      {data ? (
        <table className="block md:table w-full md:w-11/12 lg:w-3/4 text-left md:text-center">
          <thead className="absolute -top-96 -left-96 md:static md:table-header-group border-b my-12">
            <tr className="block md:table-row">
              <TH>#</TH>
              <TH>Name</TH>
              <TH>
                <p className="text-s">(days:hours:mins:secs)</p>
                Countdown
              </TH>
              <TH>
                <p className="text-s">(UTC+0100)</p>
                Date
              </TH>
              <TH>Rocket</TH>
              <TH>Site</TH>
              <TH>Patch</TH>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {data.map((launch) => {
              // We add this check to prevent past mission to appear here,
              // as there are issues with the data from the API:
              // https://github.com/r-spacex/SpaceX-API/issues/874#issuecomment-912986313
              const delta = Math.floor(launch.dateUnix - currentTime);
              const days = Math.floor(delta / 86400);
              if (days < 0) {
                return null;
              }

              return (
                <tr
                  key={launch.id}
                  className="block md:table-row transition duration-500 ease-in-out odd:bg-tableRowHover"
                >
                  <TD thLabel="#">{launch.flightNumber}</TD>
                  <TD thLabel="Name">{launch.name}</TD>
                  <TD thLabel="Countdown">
                    <TableCountdown
                      dateUnix={launch.dateUnix}
                      currentTime={currentTime}
                    />
                  </TD>
                  <TD thLabel="Date">
                    {new Date(launch.dateUnix * 1000).toLocaleDateString(
                      "fr-FR",
                    )}
                  </TD>
                  <TD thLabel="Rocket">{launch.rocketName}</TD>
                  <TD thLabel="Site">{launch.launchpadRegion}</TD>
                  <TD
                    thLabel="Patch"
                    classNames="flex items-center justify-center"
                  >
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
