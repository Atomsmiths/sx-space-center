const UPCOMING_LAUNCH_QUERY = `
  query upcomingLaunch {
    upcomingLaunch {
      name
      dateUnix
      rocketName
      launchpadRegion
      patch {
        small
        large
      }
    }
  }
`;

export { UPCOMING_LAUNCH_QUERY };
