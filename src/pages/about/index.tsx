import React from "react";

import classes from "./index.module.css";

const AboutPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center text-center">
      <p className="text-2xl">
        Developped and maintened by{" "}
        <span className="block mt-4">
          <a
            href="https://github.com/Atomsmiths/sx-space-center"
            target="_blank"
            rel="noreferrer"
            className="text-5xl anchor"
          >
            Atomsmiths
          </a>
        </span>
      </p>
      <div className="relative w-4/5 m-auto">
        <div className={"flex justify-center " + classes.logos}>
          <img src="/atomsmiths-oluane.png" alt="" className="w-32 h-64" />
          <img src="/atomsmiths-fuzznimp.png" alt="" className="w-32 h-64" />
        </div>
        <div className="flex justify-between">
          <div>
            <p>Pauline Roche (Oluane)</p>
          </div>
          <div>
            <p>Anthony Montaigne (Fuzznimp)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
