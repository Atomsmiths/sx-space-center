import { request } from "graphql-request";
// import Image from "next/image";
import React from "react";
import useSWR from "swr";

import classes from "./index.module.css";
import { RocketPartial } from "@src/@types/graphql-schema";
import { ALL_ROCKETS } from "@src/graphql/rockets/queries";

async function fetcher(url: string, query: string): Promise<RocketPartial[]> {
  return await request(url, query).then((data) => {
    return data.allRockets;
  });
}

const RocketsOverview: React.FC = () => {
  const { data, error } = useSWR<RocketPartial[], Error>(
    ["/api/graphql", ALL_ROCKETS],
    fetcher,
  );

  if (error) {
    return <div>Failed to load</div>;
  }

  console.log(data);

  return (
    <div>
      <h2 className="text-center">Rockets</h2>
      <div className=" w-full flex flex-wrap pt-20 px-20">
        {data ? (
          data.map(({ name, id, imagesLinks }) => {
            return (
              <div key={id} className={`w-1/2 pr-24 pb-24 ${classes.images}`}>
                {/* <Image
                  src={imagesLinks[0] ? imagesLinks[0] : ""}
                  alt={`${name} image`}
                  width="500"
                  height="400"
                /> */}
                <img
                  src={imagesLinks[0] ? imagesLinks[0] : ""}
                  alt={`${name} image`}
                />
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default RocketsOverview;
