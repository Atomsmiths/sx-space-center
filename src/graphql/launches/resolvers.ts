import { Launch } from "@src/@types/graphql-schema";

const launchesResolvers = {
  Query: {
    upcomingLaunch: async () => {
      const data = await fetch("https://api.spacexdata.com/v5/launches/next", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((response) => {
        return response.json();
      });

      let launchData: Launch = {
        name: data.name,
        details: data.details,
        dateUnix: data.date_unix,
        patch: {
          small: data.links.patch.small,
          large: data.links.patch.large,
        },
      };

      if (data.rocket) {
        const rocketData = await fetch(
          `https://api.spacexdata.com/v4/rockets/${data.rocket}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          },
        ).then((response) => {
          return response.json();
        });

        launchData = { ...launchData, rocket: rocketData.name };
      }

      return launchData;
    },
  },
};

export { launchesResolvers };
