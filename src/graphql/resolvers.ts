import merge from "deepmerge";

import { historyResolvers } from "./history/resolvers";
import { launchesResolvers } from "./launches/resolvers";
import { rocketsResolvers } from "./rockets/resolvers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolvers = merge.all<Record<string, any>>([
  launchesResolvers,
  rocketsResolvers,
  historyResolvers,
]);

export { resolvers };
