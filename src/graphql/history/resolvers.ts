import { RawHistory } from "@src/@types/rest-api-schema";
import { deserializingFetch } from "@src/utils/deserializingFetch";

const historyResolvers = {
  Query: {
    allHistory: async () => {
      const data = await deserializingFetch<RawHistory[]>(
        "https://api.spacexdata.com/v4/history",
      );

      const historyData = data.map(
        ({ id, title, description, links, event_date_unix }) => {
          return {
            id,
            title,
            description,
            links,
            eventDateUnix: event_date_unix,
          };
        },
      );

      return historyData;
    },
  },
};

export { historyResolvers };
