import React from "react";

import keys from "./loading-component.module.css";

const LoadingComponent: React.FC = () => {
  return (
    <div id={keys.mainContainer} className="relative w-full">
      <div
        id={keys.centralStar}
        className="absolute left-1/2 w-20 h-20 rounded-full bg-gray-100"
      ></div>
      <div
        id={keys.orbit}
        className="absolute left-1/2 top-1/2 w-60 h-60 rounded-full"
      >
        <div id={keys.planetPos} className="absolute left-1/2 -top-px">
          <div
            id={keys.planet}
            className="absolute left-1/2 right-1/2 w-6 h-6 rounded-full bg-gray-100 border-eigengrau border-solid"
          ></div>
        </div>
      </div>
    </div>
  );
};

export { LoadingComponent };
