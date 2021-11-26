import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

const NavLink: React.FC<{ href: string | UrlObject; classNames?: string }> = ({
  href,
  classNames,
  children,
}) => {
  return (
    <Link href={href} passHref>
      <a className={classNames}>{children}</a>
    </Link>
  );
};

export { NavLink };
