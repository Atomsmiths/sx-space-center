import React from "react";

import { NavbarDesktop } from "./navbar/navbar-desktop";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-screen min-h-screen pt-20">
      <h1>SpaceX Space Center</h1>
      <NavbarDesktop />
      <main>{children}</main>
    </div>
  );
};

export { Layout };
