import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="w-full flex justify-center text-center">
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
    </div>
  );
};

export default AboutPage;
