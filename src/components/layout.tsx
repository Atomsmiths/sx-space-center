import React from "react";

import { Background } from "./background";
import { NavbarDesktop } from "./navbar/navbar-desktop";
import { NavbarMobile } from "./navbar/navbar-mobile";

const Layout: React.FC = ({ children }) => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = React.useState(false);

  return (
    <>
      <Background />
      <div
        className={`${
          isMobileNavbarOpen ? "overflow-hidden h-screen" : ""
        } w-screen min-h-screen pt-20 pb-32`}
      >
        <h1>SpaceX Space Center</h1>
        <NavbarDesktop />
        <main className="pt-14 md:pt-20">{children}</main>
      </div>
      <NavbarMobile
        isMobileNavbarOpen={isMobileNavbarOpen}
        setIsMobileNavbarOpen={setIsMobileNavbarOpen}
      />
    </>
  );
};

export { Layout };
