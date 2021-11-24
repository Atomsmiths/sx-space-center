import React from "react";

import keys from "./loading.module.css";

const Loading: React.FC = () => {
  return (
    <div id={keys.mainContainer}>
      <div id={keys.centralStar}></div>
      <div id={keys.orbit}>
        <div id={keys.planetPos}>
          <div id={keys.planet}></div>
        </div>
      </div>
    </div>
  );
};

export { Loading };
