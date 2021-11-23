import React from "react";

import keys from "./loading-orbit.module.css";

const LoadingOrbit: React.FC = () => {
  return (
    <div id={keys.perspective}>
      <div id={keys.sun} />
      <div id={keys.orbit}>
        <div className={keys.pos}>
          <div id={keys.earth} />
        </div>
      </div>
    </div>
  );
};

export { LoadingOrbit };
