import { gql } from "apollo-server-micro";

const launches = gql`
  extend type Query {
    upcomingLaunch: UpcomingLaunch
    upcomingLaunches: [UpcomingLaunches]
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

  type UpcomingLaunches {
    name: String!
    details: String
    dateUnix: Int!
    rocketName: String
    launchpadRegion: String
    patch: PatchLinks
    flightNumber: Int!
  }
`;

export default launches;
