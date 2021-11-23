import { RawRocket } from "@src/@types/rest-api-schema";
import { deserializingFetch } from "@src/utils/deserializingFetch";

const rocketsResolvers = {
  Query: {
    allRockets: async () => {
      const data = await deserializingFetch<RawRocket[]>(
        "https://api.spacexdata.com/v4/rockets",
      );

      const rocketsData = data.map((rocket) => {
        return {
          name: rocket.name,
          id: rocket.id,
          imagesLinks: rocket.flickr_images,
        };
      });

      return rocketsData;
    },
    oneRocket: async (rocketId: string) => {
      const {
        name,
        id,
        flickr_images,
        height,
        diameter,
        mass,
        stages,
        active,
        description,
        wiki,
        cost_per_launch,
        first_flight,
        success_rate_pct,
        engines,
      } = await deserializingFetch<RawRocket>(
        `https://api.spacexdata.com/v4/rockets/${rocketId}`,
      );

      const rocketEngines = {
        type: engines.type,
        number: engines.number,
        propellants: [engines.propellant_1, engines.propellant_2],
      };

      return {
        name,
        id,
        height,
        diameter,
        mass,
        stages,
        active,
        description,
        wiki,
        imagesLinks: flickr_images,
        costPerLaunch: cost_per_launch,
        firstFlight: first_flight,
        successRatePct: success_rate_pct,
        engines: rocketEngines,
      };
    },
  },
};

export { rocketsResolvers };
