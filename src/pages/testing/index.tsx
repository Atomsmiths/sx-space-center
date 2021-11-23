import { request } from "graphql-request";
import React from "react";
import useSWR from "swr";

import { RocketFull } from "@src/@types/graphql-schema";
import { ONE_ROCKET } from "@src/graphql/rockets/queries";

async function fetcher(
  url: string,
  query: string,
  variable: string,
): Promise<RocketFull> {
  return await request(url, query, { rocketId: variable }).then((data) => {
    return data.oneRocket;
  });
}

const TestComponent: React.FC = () => {
  const { data, error } = useSWR<RocketFull, Error>(
    ["/api/graphql", ONE_ROCKET, "5e9d0d95eda69955f709d1eb"],
    fetcher,
  );

  if (error) {
    return <div>Failed to load</div>;
  }

  if (!data) {
    <div>Loading...</div>;
  }

  return <div>{data ? data.name : null}</div>;
};

export default TestComponent;
