import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "../../../lib/utils/cn";
import { Link, LinkProps } from "react-router-dom";

interface TopBarProps extends HTMLAttributes<HTMLElement> {}
interface TopLinkProps extends LinkProps {}
interface TopLinkAnchor extends AnchorHTMLAttributes<HTMLAnchorElement>{}

function TopBarHeader({ children, className }: TopBarProps) {
  return (
    <header className={cn(" w-full container mx-auto", className)}>
      {children}
    </header>
  );
}

function TopBar({ children, className }: TopBarProps) {
  return (
    <nav
      className={cn(
        "py-4 flex w-full flex-grow justify-between items-center",
        className
      )}
    >
      {children}
    </nav>
  );
}

function TopLinkLogo({ children, className, to }: TopLinkProps) {
  return (
    <Link to={to} className={cn(" text-left", className)}>
      {children}
    </Link>
  );
}

function TopLinkList({ children, className }: TopBarProps) {
  return <ul className={cn("flex list-none gap-4", className)}>{children}</ul>;
}

function TopBarLink({ children, className, to, ...rest }: TopLinkProps) {
  return (
    <li>
      <Link
        to={to}
        {...rest}
        className={cn(
          "hover:text-black text-gray-400 font-medium no-underline border  inline-block transition-colors",
          className
        )}
      >
        {children}
      </Link>
    </li>
  );
}
function TopBarAnchorLink({ children, className, href,...rest}: TopLinkAnchor) {
  return (
    <li>
      <a
        href={href}
        {...rest}
        className={cn(
          "hover:text-black text-gray-400 font-medium no-underline border  inline-block transition-colors",
          className
        )}
      >
        {children}
      </a>
    </li>
  );
}

export {
  TopBar,
  TopBarHeader,
  TopLinkLogo,
  TopLinkList,
  TopBarLink,
  TopBarAnchorLink,
};
