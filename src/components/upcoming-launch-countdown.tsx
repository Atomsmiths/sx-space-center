import React from "react";

const UpcomingLaunchCountdown: React.FC<{ dateUnix: number }> = ({
  dateUnix,
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

  const delta = Math.floor(dateUnix - currentTime);
  const seconds = delta % 60;
  const minutes = Math.floor(delta / 60) % 60;
  const hours = Math.floor(delta / 3600) % 24;
  const days = Math.floor(delta / 86400);

  return (
    <div className="flex justify-center items-center w-11/12 lg:w-1/3 m-auto">
      <div className="w-3/12 lg:w-1/4 text-center">
        <p className="text-6xl md:text-8xl lg:text-9xl">
          {String(days).padStart(2, "0")}
        </p>
        <p className="text-s md:text-xl lg:text-base">days</p>
      </div>
      <div className="w-3/12 lg:w-1/4 text-center">
        <p className="text-6xl md:text-8xl lg:text-9xl">
          {String(hours).padStart(2, "0")}{" "}
        </p>
        <p className="text-s md:text-xl lg:text-base">hours</p>
      </div>
      <div className="w-3/12 lg:w-1/4 text-center">
        <p className="text-6xl md:text-8xl lg:text-9xl">
          {String(minutes).padStart(2, "0")}
        </p>
        <p className="text-s md:text-xl lg:text-base">minutes</p>
      </div>
      <div className="w-3/12 lg:w-1/4 text-center">
        <p className="text-6xl md:text-8xl lg:text-9xl">
          {String(seconds).padStart(2, "0")}
        </p>
        <p className="text-s md:text-xl lg:text-base">seconds</p>
      </div>
    </div>
  );
};

export { UpcomingLaunchCountdown };
