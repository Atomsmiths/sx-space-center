import { UpcomingLaunch, UpcomingLaunches } from "@src/@types/graphql-schema";
import { deserializingFetch } from "@src/utils/deserializingFetch";

const launchesResolvers = {
  Query: {
    upcomingLaunch: async () => {
      const data = await deserializingFetch(
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
        const rocketData = await deserializingFetch(
          `https://api.spacexdata.com/v4/rockets/${data.rocket}`,
        );

        launchData = { ...launchData, rocketName: rocketData.name };
      }

      if (data.launchpad) {
        const launchpadData = await deserializingFetch(
          `https://api.spacexdata.com/v4/launchpads/${data.launchpad}`,
        );

        launchData = { ...launchData, launchpadRegion: launchpadData.region };
      }

      return launchData;
    },
    upcomingLaunches: async () => {
      const data = await deserializingFetch(
        "https://api.spacexdata.com/v5/launches/upcoming",
      );

      return data.map(async (launch: any) => {
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

        if (data.rocket) {
          rocketData = await deserializingFetch(
            `https://api.spacexdata.com/v4/rockets/${launch.rocket}`,
          );

          launchData = { ...launchData, rocketName: rocketData.name };
        }

        if (data.launchpad) {
          launchpadData = await deserializingFetch(
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
