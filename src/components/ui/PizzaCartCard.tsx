import {  HTMLAttributes, ImgHTMLAttributes, useState } from "react";

import { cn } from "../../lib/utils/cn";


interface PizzaCardProps extends HTMLAttributes<HTMLElement> { }
interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> { }


function PizzaCartCardContainer({ className, children }: PizzaCardProps) {
    return (
        <div className={cn("flex flex-col gap-10 mt-20 ", className)}>
            {children}
        </div>
    );
}
function PizzaCartCard({ className, children }: PizzaCardProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-between hover:scale-105 transition-all duration-500",
                className
            )}
        >
            {children}
        </div>
    );
}
function PizzaDetailsCartCard({ className, children }: PizzaCardProps) {
    return (
        <div
            className={cn(
                "flex  gap-5  items-center",
                className
            )}
        >
            {children}
        </div>
    );
}
function PizzaDetailsCartCardRight({ className, children }: PizzaCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 text-gray-400 text-lg",
                className
            )}
        >
            {children}
        </div>
    );
}

function PizzaCartCardImage({ className, children, src, ...rest }: CardImageProps) {
    return (
        <img
            src={src}
            title="image de um pizza"
            className={cn("w-full max-w-40", className)}
            loading="lazy"
            {...rest}
        >
            {children}
        </img>
    );
}


function PizzaCartCardTitle({ className, children }: PizzaCardProps) {
    return (
        <h4 className={cn("mt-0 text-2xl text-bold text-gray-500", className)}>
            {children}
        </h4>
    );
}
function PizzaCartCardFooter({ className, children }: PizzaCardProps) {
    return (
        <footer className={cn("mt-0 flex items-center gap-12 text-2xl text-bold text-gray-500", className)}>
            {children}
        </footer>
    );
}
function PizzaCartCardSizesSelect({ className, children }: PizzaCardProps) {
    return (
        <div className="flex items-center gap-3  ">
            <p>Tamanho: </p>
            <select className={cn("bg-transparent border-none outline-none font-bold mt-0 text-lg text-bold text-gray-500 space-x-5", className)}>
                {children}
            </select>

        </div>
    );
}
function PizzaCartCardSizesSelectOption({ className, children }: PizzaCardProps) {
    return (
        <option className={cn("mt-0 text-lg text-bold text-gray-500 ", className)}>
            {children}
        </option>
    );
}
function PizzaCartCardQuantitySelect({ className }: PizzaCardProps) {
    const [value, setValue] = useState(1)
    const addValue = ():void => {
        setValue((v) => v + 1)
    }
    const removeValue = ():void => {
        setValue((v) => v - 1)
    }
    return (
        <div className="flex gap-5 items-center ">
            <button className="bg-transparent border-none outline-none cursor-pointer"  title="adicionar pizza" onClick={addValue} >+</button>
            <h3 className={cn("mt-0 text-lg text-bold text-gray-500", className)}>
                {value}
            </h3>
            <button className="bg-transparent border-none outline-none cursor-pointer" title="remover pizza" onClick={removeValue}>-</button>

        </div>
    );
}


function PizzaCartCardPrice({ className, children }: PizzaCardProps) {
    return (
        <p className={cn("font-normal text-base text-gray-500 mb-0", className)}>
            {children}
        </p>
    );
}

export {
    PizzaCartCardContainer,
    PizzaCartCard,
    PizzaCartCardImage,
    PizzaCartCardTitle,
    PizzaCartCardPrice,
    PizzaDetailsCartCard,
    PizzaCartCardSizesSelect,
    PizzaCartCardQuantitySelect,
    PizzaDetailsCartCardRight,
    PizzaCartCardSizesSelectOption,
    PizzaCartCardFooter

};
