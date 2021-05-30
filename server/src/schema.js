const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "track's title"
    title: String!
    "track's author"
    author: Author!
    "track's thumbnail"
    thumbnail: String
    "track approx length"
    length: Int
    "no.of modules track contain"
    modulesCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    "Author name"
    name: String!
    "Author's photo"
    photo: String
  }
`;

module.exports = typeDefs;
