import { HTMLAttributes } from "react";
import { cn } from "../../../lib/utils/cn";
import { Link, LinkProps } from "react-router-dom";

interface NavBarProps extends HTMLAttributes<HTMLElement> {}
interface NavLinkProps extends LinkProps {}

function NavBarHeader({ children, className }: NavBarProps) {
  return <header className={cn(" w-full", className)}>{children}</header>;
}

function NavBar({ children, className }: NavBarProps) {
  return <nav className={cn("py-4 flex w-full flex-grow justify-between items-center", className)}>{children}</nav>;
}

function NavLinkLogo({ children, className, to }: NavLinkProps) {
  return (
    <Link to={to} className={cn("", className)}>
      {children}
    </Link>
  );
}

function NavLinkList({ children, className }: NavBarProps) {
  return <ul className={cn("flex list-none gap-4", className)}>{children}</ul>;
}

function NavBarLink({ children, className, to, ...rest }: NavLinkProps) {
  return (
    <li >
      <Link to={to} {...rest} className={cn(" text-black no-underline", className)}>
        {children}
      </Link>
    </li>
  );
}

export { NavBar, NavBarHeader, NavLinkLogo, NavLinkList, NavBarLink };
