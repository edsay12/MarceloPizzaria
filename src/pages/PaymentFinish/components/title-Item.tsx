import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

function TitleItem({ title }: TitleProps) {
  return <h2 className="font-normal text-2xl text-gray-400">{title}</h2>;
}

export default TitleItem;
