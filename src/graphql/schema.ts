import { gql } from "apollo-server-micro";

import { Mission } from "@src/@types/graphql-schema";

const typeDefs = gql`
  type Query {
    upcomingMission: Mission
  }

  type Mission {
    name: String!
    details: String
    dateUnix: Int!
    rocket: String
    patch: PatchLinks
  }

  type PatchLinks {
    small: String
    large: String
  }
`;

const resolvers = {
  Query: {
    upcomingMission: async () => {
      const data = await fetch("https://api.spacexdata.com/v4/launches/next", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((response) => {
        return response.json();
      });

      let missionData: Mission = {
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

        missionData = { ...missionData, rocket: rocketData.name };
      }

      return missionData;
    },
  },
};

export { typeDefs, resolvers };
