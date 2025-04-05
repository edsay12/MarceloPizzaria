import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

function Banner({ className, children }: SectionProps) {
  return (
    <section
      className={cn(
        "bg-[url(./src/assets/banner.webp)] w-full h-[500px] bg-cover bg-center flex items-center justify-center  ",
        className
      )}
    >
      {children}
    </section>
  );
}
function BannerDetails({ className, children }: SectionProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-5 text-white ", className)}
    >
      {children}
    </div>
  );
}

function BannerDetailsTitle({ className, children }: SectionProps) {
  return <h1 className={cn("text-white text-5xl", className)}>{children}</h1>;
}
function BannerDetailsDescription({ className, children }: SectionProps) {
  return <p className={cn("", className)}>{children}</p>;
}

export { Banner, BannerDetails, BannerDetailsTitle, BannerDetailsDescription };
