import { gql } from "apollo-server-micro";

const launches = gql`
  extend type Query {
    upcomingLaunch: UpcomingLaunch
  }

  type UpcomingLaunch {
    name: String!
    details: String
    dateUnix: Int!
    rocketName: String
    launchpadRegion: String
    patch: PatchLinks
  }

  type PatchLinks {
    small: String
    large: String
  }
`;

export default launches;
