import { gql } from "apollo-server-micro";

const rockets = gql`
  extend type Query {
    allRockets: [RocketPartial]
    oneRocket(rocketId: String!): RocketFull
  }

  type RocketPartial {
    name: String!
    id: String!
    imagesLinks: [String]!
  }

  type RocketSize {
    meters: Float
    feet: Float
  }

  type RocketMass {
    kg: Float
    lb: Float
  }

  type RocketEngines {
    type: String
    number: Int
    propellants: [String]
  }

  type RocketFull {
    name: String!
    id: String!
    imagesLinks: [String]!
    height: RocketSize
    diameter: RocketSize
    mass: RocketMass
    stages: Int
    active: Boolean
    costPerLaunch: Int
    firstFlight: String
    description: String
    engines: RocketEngines
    successRatePct: Int
    wikipedia: String
  }
`;

export default rockets;
