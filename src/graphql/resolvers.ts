import merge from "deepmerge";

import { launchesResolvers } from "./launches/resolvers";

const resolvers = merge({}, launchesResolvers);

export { resolvers };
