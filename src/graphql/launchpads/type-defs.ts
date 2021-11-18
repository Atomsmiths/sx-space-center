import { gql } from "apollo-server-micro";

const launchpads = gql`
  extend type Query {
    launchpad: Launchpad
  }

  type Launchpad {
    name: String!
    fullName: String
    locality: String
    region: String
  }
`;

export default launchpads;
