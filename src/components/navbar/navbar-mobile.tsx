import { useRouter } from "next/dist/client/router";
import React from "react";

import { SpaceRocket } from "../icons/space-rocket";
import { NavLink } from "../nav-link";

const NavbarMobile: React.FC<{
  isMobileNavbarOpen: boolean;
  setIsMobileNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isMobileNavbarOpen, setIsMobileNavbarOpen }) => {
  const { pathname } = useRouter();

  return (
    <div className="md:hidden">
      <SpaceRocket
        size="2.5rem"
        classNames="fixed bottom-8 right-8 border p-4 rounded-full bg-eigengrau z-20"
        onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
      />
      <nav
        className={`${
          !isMobileNavbarOpen ? "transform translate-y-full" : ""
        } transition-transform duration-500 ease-in-out fixed w-full h-full bg-eigengrau z-10 flex flex-col justify-center bottom-0 right-0`}
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
            href="/rockets"
            onClick={() => setIsMobileNavbarOpen(false)}
            classNames={pathname === "/rockets" ? "underline" : ""}
          >
            Rockets
          </NavLink>
          <NavLink
            href="/about"
            onClick={() => setIsMobileNavbarOpen(false)}
            classNames={pathname === "/about" ? "underline" : ""}
          >
            About
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export { NavbarMobile };
