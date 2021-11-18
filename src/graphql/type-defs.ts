import { gql } from "apollo-server-core";

import launches from "./launches/type-defs";
import launchpads from "./launchpads/type-defs";

// We add a root type def where other queries will be extended from.
// This is needed to fragment our typeDefs and resolvers.
const root = gql`
  type Query {
    root: String
  }
`;

const typeDefs = [root, launches, launchpads];

export { typeDefs };
