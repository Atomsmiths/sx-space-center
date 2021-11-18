import { gql } from "apollo-server-micro";

const launches = gql`
  extend type Query {
    upcomingLaunch: Launch
  }

  type Launch {
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

export default launches;
