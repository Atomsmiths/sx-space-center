import { ApolloServer } from "apollo-server-micro";

import { Handler } from "@src/@types/handler";
import { resolvers } from "@src/graphql/resolvers";
import { typeDefs } from "@src/graphql/type-defs";

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
