import React from "react";

import ids from "./loading-orbit.module.css";

const LoadingOrbit: React.FC = () => {
  return (
    <div
      id={ids.rotation}
      className="relative w-80 h-80 border border-dashed rounded-full"
    >
      <div
        id={ids.x}
        className="absolute top-36 -left-2 h-4 w-4 bg-white rounded-full"
      />
      <div className="absolute top-32 left-32 h-16 w-16 bg-white rounded-full" />
    </div>
  );
};

export { LoadingOrbit };
