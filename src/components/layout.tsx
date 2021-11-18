import React from "react";

import { Navbar } from "./navbar/navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <main className="w-screen min-h-screen pt-20">
      <h1 className="text-center tracking-widest text-4xl md:text-9xl">
        SpaceX Space Center
      </h1>
      <Navbar />
      {children}
    </main>
  );
};

export { Layout };