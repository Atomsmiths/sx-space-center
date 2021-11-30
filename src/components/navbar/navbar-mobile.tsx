import { useRouter } from "next/dist/client/router";
import React from "react";

import { SpaceRocket } from "../icons/space-rocket";
import { NavLink } from "../nav-link";

const NavbarMobile: React.FC = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = React.useState(false);
  const { pathname } = useRouter();

  return (
    <div className="fixed bottom-0 left-0 md:-left-4 w-full h-full md:hidden">
      <SpaceRocket
        size="2.5rem"
        classNames="absolute bottom-8 right-8 border p-4 rounded-full bg-eigengrau z-20"
        onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
      />
      <nav
        className={`${
          !isMobileNavbarOpen ? "transform translate-y-full " : ""
        } transition-transform duration-500 ease-in-out fixed w-full h-full bg-eigengrau z-10 flex flex-col justify-center`}
      >
        <div className="flex flex-col justify-around text-center h-2/3 text-2xl">
          <NavLink
            href="/"
            onClick={() => setIsMobileNavbarOpen(false)}
            classNames={pathname === "/" ? "underline" : ""}
          >
            Home
          </NavLink>
          <NavLink
            href="/future"
            onClick={() => setIsMobileNavbarOpen(false)}
            classNames={pathname === "/future" ? "underline" : ""}
          >
            Future
          </NavLink>
          <NavLink
            href="/past"
            onClick={() => setIsMobileNavbarOpen(false)}
            classNames={pathname === "/past" ? "underline" : ""}
          >
            Past
          </NavLink>
          <NavLink
            href="/history"
            onClick={() => setIsMobileNavbarOpen(false)}
            classNames={pathname === "/history" ? "underline" : ""}
          >
            History
          </NavLink>
          <NavLink
            href="/rocket"
            onClick={() => setIsMobileNavbarOpen(false)}
            classNames={pathname === "/rockets" ? "underline" : ""}
          >
            Rocket
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export { NavbarMobile };
