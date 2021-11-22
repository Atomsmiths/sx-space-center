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

const PAST_LAUNCHES_QUERY = `
  query pastLaunches {
    pastLaunches {
      name
      dateUnix
      rocketName
      launchpadRegion
      patch {
        small
        large
      }
      flightNumber
      launchSuccess
      landAttempt
      landSuccess
    }
  }
`;
export { UPCOMING_LAUNCH_QUERY, UPCOMING_LAUNCHES_QUERY, PAST_LAUNCHES_QUERY };
