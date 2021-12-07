import merge from "deepmerge";

import { historyResolvers } from "./history/resolvers";
import { launchesResolvers } from "./launches/resolvers";
import { rocketsResolvers } from "./rockets/resolvers";

const resolvers = merge.all([
  launchesResolvers,
  rocketsResolvers,
  historyResolvers,
]);

export { resolvers };
