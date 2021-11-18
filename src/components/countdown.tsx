import React from "react";

const UpcomingLaunchCountdown: React.FC<{ unixDate: number }> = ({
  unixDate,
}) => {
  const [currentTime, setCurrentTime] = React.useState(
    Math.floor(Date.now() / 1000),
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const delta = Math.floor(unixDate - currentTime);
  const seconds = delta % 60;
  const minutes = Math.floor(delta / 60) % 60;
  const hours = Math.floor(delta / 3600) % 24;
  const days = Math.floor(delta / 86400);

  return (
    <div className="flex justify-center items-center">
      <div className="w-32 text-center">
        <p className="text-5xl">{String(days).padStart(2, "0")}</p>
        <p>days</p>
      </div>
      <div className="w-32 text-center">
        <p className="text-5xl">{String(hours).padStart(2, "0")} </p>
        <p>hours</p>
      </div>
      <div className="w-32 text-center">
        <p className="text-5xl">{String(minutes).padStart(2, "0")}</p>
        <p>minutes</p>
      </div>
      <div className="w-32 text-center">
        <p className="text-5xl">{String(seconds).padStart(2, "0")}</p>
        <p>seconds</p>
      </div>
    </div>
  );
};

export { UpcomingLaunchCountdown };
