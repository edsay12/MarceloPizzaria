import { HTMLAttributes } from "react";

interface Footer extends HTMLAttributes<HTMLElement> {}

function Footer({ children, className }: Footer) {
  return (
    <header className={cn(" w-full container mx-auto", className)}>
      {children}
    </header>
  );
}
