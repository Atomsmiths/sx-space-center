import { request } from "graphql-request";
import React from "react";
import useSWR from "swr";

import classes from "./index.module.css";
import { RocketPartial } from "@src/@types/graphql-schema";
import { LoadingComponent } from "@src/components/loading-component/loading-component";
import { NavLink } from "@src/components/nav-link";
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

  return (
    <div>
      <h2 className="text-center">Rockets</h2>
      <div className="w-full flex flex-wrap justify-evenly pt-12 md:pt-20 px-12 md:px-0">
        {data ? (
          data.map(({ name, id, imagesLinks }, index) => {
            return (
              <NavLink
                key={id}
                href={`/rockets/${id}`}
                classNames={`group w-full md:w-5/12 xl:w-1/5 mb-24 relative overflow-hidden ${classes.images}`}
              >
                <img
                  src={imagesLinks[0] ? imagesLinks[0] : ""}
                  alt={`${name} image`}
                  className={`object-cover w-full h-full rounded-md ${
                    index === 0 ? "object-top" : "object-center"
                  }`}
                />
                <div className="flex items-center justify-center w-full h-32 absolute bottom-0 lg:-bottom-20 lg:group-hover:bottom-0 transition-inset duration-300 ease-linear bg-gradient-to-t from-overlay">
                  <h4 className="text-center text-xl md:text-2xl filter drop-shadow-custom">
                    {name}
                  </h4>
                </div>
              </NavLink>
            );
          })
        ) : (
          <LoadingComponent />
        )}
      </div>
    </div>
  );
};

export default RocketsOverview;
