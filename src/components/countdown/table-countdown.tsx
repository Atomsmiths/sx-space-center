import React from "react";

const TableCountdown: React.FC<{
  dateUnix: number;
  currentTime: number;
}> = ({ dateUnix, currentTime }) => {
  const delta = Math.floor(dateUnix - currentTime);
  const seconds = delta % 60;
  const minutes = Math.floor(delta / 60) % 60;
  const hours = Math.floor(delta / 3600) % 24;
  const days = Math.floor(delta / 86400);

  return (
    <p>
      {String(days).padStart(2, "0")}:{String(hours).padStart(2, "0")}:
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </p>
  );
};

export { TableCountdown };
