import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

function CardWithIconContainer({ className, children }: SectionProps) {
  return (
    <div
      className={cn(
        "grid  grid-cols-1  xl:grid-cols-3 gap-20 mt-20 ",
        className
      )}
    >
      {children}
    </div>
  );
}
function CardWithIcon({ className, children }: SectionProps) {
  return (
    <div
      className={cn(
        "text-center bg-gray-200 p-10 rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </div>
  );
}
function CardIco({ className, children }: SectionProps) {
  return (
    <span className={cn("text-yellow-500 text-2xl", className)}>
      {children}
    </span>
  );
}

function CardTitle({ className, children }: SectionProps) {
  return <h3 className={cn("text-2xl text-black", className)}>{children}</h3>;
}

function CardDescription({ className, children }: SectionProps) {
  return (
    <p className={cn("text-lg text-gray-400 font-normal", className)}>
      {children}
    </p>
  );
}

export {
  CardWithIcon,
  CardWithIconContainer,
  CardTitle,
  CardDescription,
  CardIco,
};
