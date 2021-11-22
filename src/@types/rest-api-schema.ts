type RawLaunch = {
  name: string;
  date_unix: number;
  flight_number: number;
  details: string | null;
  rocket: string | null;
  launchpad: string | null;
  links: RawPatchLinks;
};

type RawPatchLinks = {
  patch: {
    small: string | null;
    large: string | null;
  };
};

type RawRocket = {
  name: string;
};

type RawLaunchpad = {
  region: string;
};

export type { RawLaunch, RawRocket, RawLaunchpad };
