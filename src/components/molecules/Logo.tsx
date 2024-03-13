import { HTMLAttributes } from "react";
import logo from "../../assets/logo.png";
import { cn } from "../../lib/utils/cn";

interface logoprops extends HTMLAttributes<HTMLImageElement> {
  className?: string;
}

function Logo({className ,...rest }: logoprops) {
  return <img src={logo} alt="logo da marcelo pizzaria" className={cn("w-7",className)} {...rest} />;
}

export default Logo;
