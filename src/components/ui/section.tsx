import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

function Section({ className, children }: SectionProps) {
  return (
    <section className={cn("relative p-0 m-0", className)}>
      {children}
    </section>
  );
}

function SectionContainer({ className, children }: SectionProps) {
  return (
    <section className={cn("container ", className)}>
      {children}
    </section>
  );
}


function SectionDetailsContainer({ className, children }: SectionProps) {
  return (
    <div
      className={cn(
        " mt-10  xl:max-w-[500px] w-full text-center xl:text-left  ",
        className
      )}
    >
      {children}
    </div>
  );
}

function SectionImageContainer({ className, children }: SectionProps) {
  return <div className={cn("", className)}>{children}</div>;
}

function SectionTitle({ className, children }: SectionProps) {
  return (
    <section
      className={cn(
        "text-gray-400 font-semibold   text-3xl lg:text-5xl  leading-[55px] mb-5 ",
        className
      )}
    >
      {children}
    </section>
  );
}
function SectionSubTitle({ className, children }: SectionProps) {
  return <section className={cn("text-sm text-yellow-500 font-semibold mb-2", className)}>{children}</section>;
}

function SectionDetails({ className, children }: SectionProps) {
  return <section className={cn(" w-full text-gray-300  ", className)}>{children}</section>;
}

export {
  Section,
  SectionDetails,
  SectionDetailsContainer,
  SectionContainer,
  SectionSubTitle,
  SectionTitle,
  SectionImageContainer,
};
