"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  const styles = `${path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}`;

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
};
export default NavLink;
