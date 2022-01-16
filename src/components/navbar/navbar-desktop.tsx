import { useRouter } from "next/dist/client/router";
import React from "react";

import { SpaceShuttle } from "../icons/space-shuttle";
import { NavLink } from "../nav-link";

const NavbarDesktop: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className="hidden md:block mt-4">
      <ul className="flex justify-center text-l">
        <SpaceShuttle classNames="text-gray-100" size="2.5rem" />
        <li className="ml-12 mr-6">
          <NavLink
            href={"/"}
            classNames={pathname === "/" ? "anchor active" : "anchor"}
          >
            Home
          </NavLink>
        </li>
        <li className="mx-6">
          <NavLink
            href={"/future"}
            classNames={pathname === "/future" ? "anchor active" : "anchor"}
          >
            Future
          </NavLink>
        </li>
        <li className="mx-6">
          <NavLink
            href={"/past"}
            classNames={pathname === "/past" ? "anchor active" : "anchor"}
          >
            Past
          </NavLink>
        </li>
        <li className="mx-6">
          <NavLink
            href={"/history"}
            classNames={pathname === "/history" ? "anchor active" : "anchor"}
          >
            History
          </NavLink>
        </li>
        <li className="mr-12 ml-6">
          <NavLink
            href={"/rockets"}
            classNames={pathname === "/rockets" ? "anchor active" : "anchor"}
          >
            Rockets
          </NavLink>
        </li>
        <li className="mr-12">
          <NavLink
            href={"/about"}
            classNames={pathname === "/about" ? "anchor active" : "anchor"}
          >
            About
          </NavLink>
        </li>
        <SpaceShuttle
          size="2.5rem"
          classNames="text-gray-100 transform rotate-180"
        />
      </ul>
    </nav>
  );
};

export { NavbarDesktop };
