import merge from "deepmerge";

import { launchesResolvers } from "./launches/resolvers";
import { rocketsResolvers } from "./rockets/resolvers";

const resolvers = merge(launchesResolvers, rocketsResolvers);

export { resolvers };
