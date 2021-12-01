import { useRouter } from "next/dist/client/router";
import React from "react";

import { SpaceShuttle } from "../icons/space-shuttle";
import { NavLink } from "../nav-link";
import classes from "./navbar-desktop.module.css";

const NavbarDesktop: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className="hidden md:block mt-4">
      <ul className="flex justify-center text-l">
        <SpaceShuttle classNames="text-gray-100" size="2.5rem" />
        <li className="ml-12 mr-6">
          <NavLink
            href={"/"}
            classNames={
              pathname === "/"
                ? `${classes.anchor} ${classes.active}`
                : `${classes.anchor}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mx-6">
          <NavLink
            href={"/future"}
            classNames={
              pathname === "/future"
                ? `${classes.anchor} ${classes.active}`
                : `${classes.anchor}`
            }
          >
            Future
          </NavLink>
        </li>
        <li className="mx-6">
          <NavLink
            href={"/past"}
            classNames={
              pathname === "/past"
                ? `${classes.anchor} ${classes.active}`
                : `${classes.anchor}`
            }
          >
            Past
          </NavLink>
        </li>
        <li className="mx-6">
          <NavLink
            href={"/history"}
            classNames={
              pathname === "/history"
                ? `${classes.anchor} ${classes.active}`
                : `${classes.anchor}`
            }
          >
            History
          </NavLink>
        </li>
        <li className="mr-12 ml-6">
          <NavLink
            href={"/rockets"}
            classNames={
              pathname === "/rockets"
                ? `${classes.anchor} ${classes.active}`
                : `${classes.anchor}`
            }
          >
            Rockets
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
