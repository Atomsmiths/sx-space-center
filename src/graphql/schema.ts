import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    nextMission: [Mission]
  }

  type Mission {
    dateUnix: Int
  }
`;

const resolvers = {
  Query: {
    nextMission: async () => {
      return fetch("https://api.spacexdata.com/v4/launches/next", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((returnData) => {
          return [{ dateUnix: returnData.date_unix }];
        });
    },
  },
};

export { typeDefs, resolvers };
