import { request } from "graphql-request";
import React from "react";
import useSWR from "swr";

// import { RocketFull } from "@src/@types/graphql-schema";
import { ONE_ROCKET } from "@src/graphql/rockets/queries";

// type GraphQlOperation = {
//   query: string;
//   variables: Record<string, string>;
// };

function fetcher(url: string, query: string, variable: string): void {
  // console.log("variables:", variable);
  const data = request(url, query, { rocketId: variable });
  console.log("data:", data);
}

const TestComponent: React.FC = () => {
  const { data, error } = useSWR<void, Error>(
    ["/api/graphql", ONE_ROCKET, "5e9d0d95eda69955f709d1eb"],
    fetcher,
  );

  if (error) {
    return <div>Failed to load</div>;
  }

  console.log(data);

  return <div>Nothing to see here.</div>;
};

export default TestComponent;
