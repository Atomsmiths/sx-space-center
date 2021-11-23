type RawLaunch = {
  name: string;
  date_unix: number;
  flight_number: number;
  details: string | null;
  rocket: string | null;
  launchpad: string | null;
  links: RawPatchLinks;
  success: boolean | null;
  cores: RawCores[];
};

type RawPatchLinks = {
  patch: {
    small: string | null;
    large: string | null;
  };
};

type RawCores = {
  landing_attempt: boolean | null;
  landing_success: boolean | null;
};

type RawRocket = {
  name: string;
  flickr_images: string[];
  id: string;
  height: RawRocketSize;
  diameter: RawRocketSize;
  mass: RawRocketMass;
  stages: number;
  active: boolean;
  cost_per_launch: number;
  success_rate_pct: number;
  wiki: string;
  first_flight: string;
  description: string;
  engines: RawRocketEngines;
};

type RawRocketSize = {
  meters: number;
  feet: number;
};

type RawRocketMass = {
  meters: number;
  feet: number;
};

type RawRocketEngines = {
  type: string;
  number: number;
  propellant_1: string;
  propellant_2: string;
};

type RawLaunchpad = {
  region: string;
};

export type { RawLaunch, RawRocket, RawLaunchpad };
