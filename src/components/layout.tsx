import React from "react";

import { Background } from "./background";
import { Navbar } from "./navbar/navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Background />
      <div className="w-screen min-h-screen pt-20">
        <h1>SpaceX Space Center</h1>
        <Navbar />
        <main className="pt-14 md:pt-20">{children}</main>
      </div>
    </>
  );
};

export { Layout };
