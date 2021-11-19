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

const UPCOMING_LAUNCHES_QUERY = `
  query upcomingLaunches {
    upcomingLaunches {
      name
      name
      dateUnix
      rocketName
      launchpadRegion
      patch {
        small
        large
      }
      flightNumber
    }
  }
`;

export { UPCOMING_LAUNCH_QUERY, UPCOMING_LAUNCHES_QUERY };
