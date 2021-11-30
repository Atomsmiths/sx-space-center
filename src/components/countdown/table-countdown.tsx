import React from "react";

import { computeUnixDate } from "@src/utils/compute-unix-date";

const TableCountdown: React.FC<{
  dateUnix: number;
  currentTime: number;
}> = ({ dateUnix, currentTime }) => {
  const { seconds, minutes, hours, days } = computeUnixDate(
    currentTime,
    dateUnix,
  );

  return (
    <p>
      {String(days).padStart(2, "0")}:{String(hours).padStart(2, "0")}:
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </p>
  );
};

export { TableCountdown };
