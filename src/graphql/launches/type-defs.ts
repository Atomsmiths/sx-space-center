import { gql } from "apollo-server-micro";

const launches = gql`
  extend type Query {
    upcomingLaunch: UpcomingLaunch
    upcomingLaunches: [UpcomingLaunches]
    pastLaunches: [PastLaunches]
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
    id: String!
    name: String!
    details: String
    dateUnix: Int!
    rocketName: String
    launchpadRegion: String
    patch: PatchLinks!
    flightNumber: Int!
  }

  type PastLaunches {
    name: String!
    details: String
    dateUnix: Int!
    rocketName: String
    launchpadRegion: String
    patch: PatchLinks
    flightNumber: Int!
    launchSuccess: Boolean
    landAttempt: Boolean
    landSuccess: Boolean
  }
`;

export default launches;
