import { ApolloServer, gql } from "apollo-server-micro";

import { Handler } from "@src/@types/handler";
import { Resolvers } from "@src/@types/resolvers";

const typeDefs = gql`
  type Query {
    nextMission: [Mission]
  }

  type Mission {
    dateUnix: Int
  }
`;

const resolvers: Resolvers = {
  Query: {
    nextMission() {
      return [{ dateUnix: 1583556631 }];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

const handler: Handler<any> = async (request, response) => {
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com",
  );
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );

  if (request.method === "OPTIONS") {
    response.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(request, response);
};

const config = {
  api: {
    bodyParser: false,
  },
};

export { config };
export default handler;
