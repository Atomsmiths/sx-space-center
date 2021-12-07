const ALL_HISTORY = `
  query allHistory {
    allHistory {
      id
      title
      eventDateUnix
      description
      links {
        article
      }
    }
  }
`;

export { ALL_HISTORY };
