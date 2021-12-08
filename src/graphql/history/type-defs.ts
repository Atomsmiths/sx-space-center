import { gql } from "apollo-server-micro";

const history = gql`
  extend type Query {
    allHistory: [Event]
  }

  type Event {
    id: String!
    title: String!
    eventDateUnix: Int!
    description: String
    links: EventLinks
  }

  type EventLinks {
    article: String
  }
`;

export default history;
