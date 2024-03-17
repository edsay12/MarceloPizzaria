import { HTMLAttributes } from "react";
import { cn } from "../../../lib/utils/cn";
import { Link, LinkProps } from "react-router-dom";

interface FooterProps extends HTMLAttributes<HTMLElement> {}
interface FooterLinkProps extends LinkProps {}
function Footer({ children, className }: FooterProps) {
  return <footer className={cn("relative w-full mt-20   ", className)}>{children}</footer>;
}

function FooterContainer({ children, className }: FooterProps) {
  return (
    <footer
      className={cn(
        " container flex gap-10  justify-between  flex-wrap  mx-auto p-20   ",
        className
      )}
    >
      {children}
    </footer>
  );
}

function FooterLogo({ children, className }: FooterProps) {
  return <div className={cn("max-w-[148px] xl:mx-0 mx-auto", className)}>{children}</div>;
}

function FooterNav({ children, className }: FooterProps) {
  return <nav className={cn("flex flex-wrap  md:flex-nowrap gap-10 ", className)}>{children}</nav>;
}

function FooterSection({ children, className }: FooterProps) {
  return <div className={cn("w-full   text-center xl:text-left mx-auto min-w-[100px] ", className)}>{children}</div>;
}
function FooterSectionTitle({ children, className }: FooterProps) {
  return (
    <h4 className={cn("font-normal text- uppercase", className)}>{children}</h4>
  );
}

function FooterSectionLinks({ children, className }: FooterProps) {
  return <ul className={cn("list-none  ", className)}>{children}</ul>;
}
function FooterSectionLink({ children, className,to }: FooterLinkProps) {
  return (
    <li>
      <Link className={cn("no-underline text-sm font-light text-gray-500 hover:text-gray-950", className)} to={to}>{children}</Link>
    </li>
  );
}
function FooterBottonText({ children, className }: FooterProps) {
  return (
    <p className={cn("text-center text-gray-500 p-5 w-full",className)}>{children}</p>
  );
}

export {
  Footer,
  FooterContainer,
  FooterLogo,
  FooterNav,
  FooterSection,
  FooterSectionTitle,
  FooterSectionLinks,
  FooterSectionLink,
  FooterBottonText
};
