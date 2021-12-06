import { GetServerSideProps } from "next";
import React from "react";
import useSWR from "swr";

import { RocketFull } from "@src/@types/graphql-schema";
import { ExternalLink } from "@src/components/icons/external-link";
import { FalconHeavy } from "@src/components/icons/falcon-heavy";
import { Falcon1 } from "@src/components/icons/falcon1";
import { Falcon9 } from "@src/components/icons/falcon9";
import { Starship } from "@src/components/icons/starship";
import { LoadingComponent } from "@src/components/loading-component/loading-component";
import { ONE_ROCKET } from "@src/graphql/rockets/queries";
import {
  capitalizeFirstLetter,
  formatCamelCasedWordGroup,
} from "@src/utils/format";

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

const RocketDataTable: React.FC<RocketDataTableType> = ({ caption, data }) => {
  return (
    <table className="w-full">
      <caption className="pb-4">{caption}</caption>
      <tbody>
        {Object.entries(data).map(([specName, specValue], index, array) => {
          return (
            <tr
              className={index === array.length - 1 ? "" : "border-b"}
              key={specName + index}
            >
              <th className="px-4 py-6 text-left">
                {formatCamelCasedWordGroup(specName)}
              </th>

              <td className="text-center">
                {typeof specValue === "string"
                  ? specValue
                  : specValue.map((value, index) => {
                      const capitalizedValue = capitalizeFirstLetter(value);
                      return (
                        <React.Fragment key={value + index}>
                          {index === 0
                            ? capitalizedValue
                            : ` / ${capitalizedValue}`}
                        </React.Fragment>
                      );
                    })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

type RocketDataTableType = {
  caption: string;
  data: Record<string, string | string[]>;
};

const RocketPage: React.FC<{ rocketId: string }> = ({ rocketId }) => {
  const { data, error } = useSWR<RocketFull, Error>([
    ONE_ROCKET,
    "oneRocket",
    JSON.stringify({ rocketId }),
  ]);

  if (error) {
    return <span>Failed to load</span>;
  }

  let nonTechnicalData = {};
  let technicalData = {};

  if (data) {
    nonTechnicalData = {
      firstFlightDate: data.firstFlight ? data.firstFlight : "N/A",
      active:
        data.active !== undefined
          ? data.active === true
            ? "Yes"
            : "No"
          : "N/A",
      successRate: data.successRatePct ? data.successRatePct + "%" : "N/A",
      costPerLaunch: data.costPerLaunch
        ? data.costPerLaunch.toLocaleString() + "$"
        : "N/A",
    };

    technicalData = {
      height:
        data.height && data.height.meters && data.height.feet
          ? [`${data.height.meters}m`, `${data.height.feet}ft`]
          : "N/A",
      diameter:
        data.diameter && data.diameter.meters && data.diameter.feet
          ? [`${data.diameter.meters}m`, `${data.diameter.feet}ft`]
          : "N/A",
      mass:
        data.mass && data.mass.kg && data.mass.lb
          ? [
              `${data.mass.kg.toLocaleString()}kg`,
              `${data.mass.lb.toLocaleString()}lb`,
            ]
          : "N/A",
      stages: data.stages ? data.stages.toString() : "N/A",
      enginesType:
        data.engines && data.engines.type
          ? capitalizeFirstLetter(data.engines.type)
          : "N/A",
      enginesNumber:
        data.engines && data.engines.number
          ? data.engines.number.toString()
          : "N/A",
      propellants:
        data.engines && data.engines.propellants
          ? data.engines.propellants
          : "N/A",
    };
  }

  return (
    <>
      {data ? (
        <>
          <h2 className="text-center">{data.name} rocket</h2>
          <div className="relative flex flex-col md:flex-row flex-wrap items-center md:items-start lg:items-center lg:justify-evenly px-10 pt-8 md:px-20 md:pt-20">
            <div className="md:w-1/2 lg:w-1/3 order-2 md:order-none pt-14 md:pt-0">
              <p className=" leading-relaxed ">{data.description}</p>
              {data.wikipedia ? (
                <div className="py-10 flex justify-center items-center gap-3">
                  <a href={data.wikipedia} target="_blank" rel="noreferrer">
                    Wiki
                  </a>
                  <ExternalLink size={"16"} classNames="" />
                </div>
              ) : null}
              <RocketDataTable caption="Overview" data={nonTechnicalData} />
            </div>
            <div className="md:w-1/2 lg:w-1/4 order-1 md:order-none">
              {getSVGbyRocketId(rocketId, "w-auto h-194 md:h-204")}
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 order-3 md:order-none pt-14 md:pt-0">
              <RocketDataTable
                caption="Technical overview"
                data={technicalData}
              />
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
