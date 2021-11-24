import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

import { SpaceShuttle } from "../icons/space-shuttle";
import classes from "./navbar.module.css";

const NavLink: React.FC<{ href: string | UrlObject }> = ({
  href,
  children,
}) => {
  const { pathname } = useRouter();

  return (
    <Link href={href} passHref>
      <a
        className={
          classes.anchor + `${pathname === href ? ` ${classes.active}` : ""}`
        }
      >
        {children}
      </a>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="hidden md:block mt-4">
      <ul className="flex justify-center text-l">
        <SpaceShuttle classNames="text-gray-100" size="2.5rem" />
        <li className="ml-12 mr-6">
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li className="mx-6">
          <NavLink href={"/future"}>Future</NavLink>
        </li>
        <li className="mx-6">
          <NavLink href={"#"}>Past</NavLink>
        </li>
        <li className="mx-6">
          <NavLink href={"#"}>History</NavLink>
        </li>
        <li className="mr-12 ml-6">
          <NavLink href={"#"}>Rockets</NavLink>
        </li>
        <SpaceShuttle
          size="2.5rem"
          classNames="text-gray-100 transform rotate-180"
        />
      </ul>
    </nav>
  );
};

export { Navbar };
