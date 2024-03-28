import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

interface ModalContainerProps extends HTMLAttributes<HTMLElement> {
  isModalOpen: boolean;
}
interface ModalProps extends HTMLAttributes<HTMLElement> {}
interface ModalCloseButtonProps {
  onClick: () => void;
}

function ModalContainer({
  className,
  children,
  isModalOpen = false,
}: ModalContainerProps) {
  return (
    <div
      className={cn(
        isModalOpen ? "top-0 left-0" : "-top-[1000px] left-0 ",
        "fixed  transition-all duration-500  w-screen h-screen flex items-center justify-center z-50 p-5 ",
        className
      )}
    >
      {children}
    </div>
  );
}
function Modal({ className, children }: ModalProps) {
  return (
    <div
      className={cn(
        "relative  h-full w-full  bg-white p-10 rounded-lg flex flex-col items-center justify-center text-center shadow-2xl ",
        className
      )}
    >
      {children}
    </div>
  );
}
function ModalCloseButton({ onClick }: ModalCloseButtonProps) {
  return (
    <Button
      className="absolute top-5 right-5 cursor-pointer z-10  text-gray-500"
      onClick={onClick}
    >
      <CloseIcon />
    </Button>
  );
}
function ModalContainerOverlay({ onClick }: ModalCloseButtonProps) {
  return (
    <div
      aria-label="overlay"
      className="absolute -z-20 w-screen h-screen top-0 left-0  opacity-15 cursor-pointer"
      onClick={onClick}
    ></div>
  );
}

export { ModalContainer, Modal, ModalCloseButton, ModalContainerOverlay };
