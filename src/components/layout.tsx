import React from "react";

import { Navbar } from "./navbar/navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-screen min-h-screen pt-20">
      <h1 className="text-center tracking-widest">SpaceX Space Center</h1>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export { Layout };
