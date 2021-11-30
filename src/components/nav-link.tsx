import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

const NavLink: React.FC<{
  href: string | UrlObject;
  classNames?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}> = ({ href, classNames, onClick, children }) => {
  return (
    <Link href={href} passHref>
      <a className={classNames} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};

export { NavLink };
