import { ButtonHTMLAttributes, HTMLAttributes, ImgHTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";


interface PizzaCardProps extends HTMLAttributes<HTMLElement> {}
interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {}
interface CardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

function PizzaCardContainer({ className, children }: PizzaCardProps) {
  return (
    <div className={cn("grid w-full grid-cols-1 sm:grid-cols-2  xl:grid-cols-4  gap-20 mt-20 ", className)}>
      {children}
    </div>
  );
}
function PizzaCard({ className, children }: PizzaCardProps) {
  return (
    <div
      className={cn(
        "relative shadow-sm flex flex-col p-10 items-center justify-center text-center bg-gray-50  rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out max-h-[380px]",
        className
      )}
    >
      {children}
    </div>
  );
}

function PizzaCardImage({ className, children, src, ...rest }: CardImageProps) {
  return (
    <img
      src={src}
      title="image de um pizza"
      className={cn("w-full max-w-40", className)}
      {...rest}
    >
      {children}
    </img>
  );
}
function PizzaCardButton({ className, children,...rest }: CardButtonProps) {
  return (
    <button
      className={cn(
        "absolute top-[165px] z-20 bg-yellow-500 outline-none border-none w-14 h-14 rounded-full text-white font-semibold cursor-pointer hover:scale-110 transition-all duration-500   ",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

function PizzaCardTitle({ className, children }: PizzaCardProps) {
  return (
    <h3 className={cn("mt-0 text-lg text-bold text-gray-500", className)}>
      {children}
    </h3>
  );
}

function PizzaCardDescription({ className, children }: PizzaCardProps) {
  return (
    <p className={cn("mt-0 w-full break-words text-xs text-clip  text-gray-400 font-normal", className)}>
      {children}
    </p>
  );
}
function PizzaCardPrice({ className, children }: PizzaCardProps) {
  return (
    <p className={cn("mt-8  font-normal text-base text-gray-500 mb-0", className)}>
      {children}
    </p>
  );
}

export {
  PizzaCardContainer,
  PizzaCardImage,
  PizzaCardTitle,
  PizzaCardPrice,
  PizzaCardDescription,
  PizzaCardButton,
  PizzaCard,
};
