import { GetServerSideProps } from "next";
import React from "react";
import useSWR from "swr";

import { RocketFull } from "@src/@types/graphql-schema";
import { Falcon1 } from "@src/components/icons/falcon_1";
import { Falcon9 } from "@src/components/icons/falcon_9";
import { FalconHeavy } from "@src/components/icons/falcon_heavy";
import { Starship } from "@src/components/icons/starship";
import { LoadingComponent } from "@src/components/loading-component/loading-component";
import { ONE_ROCKET } from "@src/graphql/rockets/queries";

function getSVGbyRocketId(
  rocketId: string,
  classNames: string,
): JSX.Element | undefined {
  const svgRockets = [
    {
      id: "5e9d0d95eda69973a809d1ec",
      svg: <Falcon9 classNames={classNames} />,
    },
    {
      id: "5e9d0d95eda69955f709d1eb",
      svg: <Falcon1 classNames={classNames} />,
    },
    {
      id: "5e9d0d95eda69974db09d1ed",
      svg: <FalconHeavy classNames={classNames} />,
    },
    {
      id: "5e9d0d96eda699382d09d1ee",
      svg: <Starship classNames={classNames} />,
    },
  ];

  const svgElement = svgRockets.find((element) => element.id === rocketId);

  if (svgElement === undefined) {
    return;
  }

  return svgElement.svg;
}

const RocketPage: React.FC<{ rocketId: string }> = ({ rocketId }) => {
  const { data, error } = useSWR<RocketFull, Error>([
    ONE_ROCKET,
    "oneRocket",
    JSON.stringify({ rocketId }),
  ]);

  if (error) {
    return <span>Failed to load</span>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <>
      {data ? (
        <>
          <h2 className="text-center">{data.name} rocket</h2>
          <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start lg:items-center lg:justify-evenly px-10 pt-8 md:px-20 md:pt-20">
            <div className="md:w-1/2 lg:w-1/3 order-2 md:order-none pt-14 md:pt-0">
              <p>{data.description}</p>
              <table className="w-full mt-14">
                <caption className="pb-4">Overview</caption>
                <tbody>
                  <tr className="border-b">
                    <th className="px-4 py-6 text-left">First flight date</th>
                    <td className="text-center">{data.firstFlight}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-4 py-6 text-left">Active</th>
                    <td className="text-center">
                      {data.active ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-4 py-6 text-left">Success rate</th>
                    <td className="text-center">{`${data.successRatePct} %`}</td>
                  </tr>
                  <tr className="">
                    <th className="px-4 py-6 text-left">Cost per launch</th>
                    <td className="text-center">{`${data.costPerLaunch} $`}</td>
                  </tr>
                </tbody>
              </table>
              {data.wikipedia ? (
                <a href={data.wikipedia} target="_blank" rel="noreferrer">
                  Wiki
                </a>
              ) : null}
            </div>
            <div className="md:w-1/2 lg:w-1/4 order-1 md:order-none">
              {getSVGbyRocketId(rocketId, "w-auto h-194 md:h-204")}
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 order-3 md:order-none pt-14 md:pt-0">
              <table className="w-full">
                <caption className="pb-8">Technical overview</caption>
                <tbody>
                  <tr className="border-b">
                    <th className="px-4 py-6 text-left">Height</th>
                    <td className="text-center">{`${
                      data.height
                        ? `${data.height.meters}m ${data.height.feet}ft`
                        : "N/A"
                    }`}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-4 py-6 text-left">Diameter</th>
                    <td className="text-center">
                      {data.active ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-4 py-6 text-left">Mass</th>
                    <td className="text-center">{`${data.successRatePct} %`}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-4 py-6 text-left">Stages number</th>
                    <td className="text-center">{data.stages}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-4 py-6 text-left">Engines type</th>
                    <td className="text-center">
                      {data.engines?.type?.toUpperCase()}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-4 py-6 text-left">Engines number</th>
                    <td className="text-center">{data.engines?.number}</td>
                  </tr>
                  <tr className="">
                    <th className="px-4 py-6 text-left">Propellants</th>
                    <td className="text-center">
                      {data.engines?.propellants?.map((propellant, index) => (
                        <p key={index}>{propellant}</p>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context?.params?.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { rocketId: context.params.id },
  };
};

export default RocketPage;
export { getServerSideProps };
