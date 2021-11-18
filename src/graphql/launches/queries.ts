const UPCOMING_LAUNCH_QUERY = `
  query upcomingLaunch {
    upcomingLaunch {
      name
      dateUnix
      rocket
      patch {
        small
        large
      }
    }
  }
`;

export { UPCOMING_LAUNCH_QUERY };
