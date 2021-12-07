import merge from "deepmerge";

import { historyResolvers } from "./history/resolvers";
import { launchesResolvers } from "./launches/resolvers";
import { rocketsResolvers } from "./rockets/resolvers";
import { ResolversTypes } from "@src/@types/graphql-schema";

const resolvers = merge.all<ResolversTypes>([
  launchesResolvers,
  rocketsResolvers,
  historyResolvers,
]);

export { resolvers };
