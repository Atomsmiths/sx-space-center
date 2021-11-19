const UPCOMING_LAUNCH_QUERY = `
  query upcomingLaunch {
    upcomingLaunch {
      name
      dateUnix
      rocket
      launchpad {
        name
        fullName
        locality
        region
      }
      patch {
        small
        large
      }
    }
  }
`;

export { UPCOMING_LAUNCH_QUERY };
