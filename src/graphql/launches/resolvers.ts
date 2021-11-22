import { UpcomingLaunch, UpcomingLaunches } from "@src/@types/graphql-schema";
import {
  RawLaunch,
  RawLaunchpad,
  RawRocket,
} from "@src/@types/rest-api-schema";
import { deserializingFetch } from "@src/utils/deserializingFetch";

const launchesResolvers = {
  Query: {
    upcomingLaunch: async () => {
      const data = await deserializingFetch<RawLaunch>(
        "https://api.spacexdata.com/v5/launches/next",
      );

      let launchData: UpcomingLaunch = {
        name: data.name,
        details: data.details,
        dateUnix: data.date_unix,
        patch: {
          small: data.links.patch.small,
          large: data.links.patch.large,
        },
      };

      if (data.rocket) {
        const rocketData = await deserializingFetch<RawRocket>(
          `https://api.spacexdata.com/v4/rockets/${data.rocket}`,
        );

        launchData = { ...launchData, rocketName: rocketData.name };
      }

      if (data.launchpad) {
        const launchpadData = await deserializingFetch<RawLaunchpad>(
          `https://api.spacexdata.com/v4/launchpads/${data.launchpad}`,
        );

        launchData = { ...launchData, launchpadRegion: launchpadData.region };
      }

      return launchData;
    },
    upcomingLaunches: async () => {
      const data = await deserializingFetch<RawLaunch[]>(
        "https://api.spacexdata.com/v5/launches/upcoming",
      );

      return data.map(async (launch) => {
        let rocketData, launchpadData;
        let launchData: UpcomingLaunches = {
          name: launch.name,
          details: launch.details,
          dateUnix: launch.date_unix,
          patch: {
            small: launch.links.patch.small,
            large: launch.links.patch.large,
          },
          flightNumber: launch.flight_number,
        };

        if (launch.rocket) {
          rocketData = await deserializingFetch<RawRocket>(
            `https://api.spacexdata.com/v4/rockets/${launch.rocket}`,
          );

          launchData = { ...launchData, rocketName: rocketData.name };
        }

        if (launch.launchpad) {
          launchpadData = await deserializingFetch<RawLaunchpad>(
            `https://api.spacexdata.com/v4/launchpads/${launch.launchpad}`,
          );

          launchData = { ...launchData, launchpadRegion: launchpadData.region };
        }

        return launchData;
      });
    },
  },
};

export { launchesResolvers };
