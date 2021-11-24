import React from "react";

import ids from "./loading.module.css";

const Loading: React.FC = () => {
  return (
    <div id={ids.universe}>
      <div id={ids.galaxy}>
        <div id={ids.sun}></div>
        <div id={ids.mercury} className={ids.orbit}>
          <div className={ids.pos}>
            <div className={ids.planet}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Loading };
