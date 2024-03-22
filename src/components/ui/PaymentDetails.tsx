import { cn } from "../../lib/utils/cn";
import { HTMLAttributes } from "react";

interface PaymentDetailsProps extends HTMLAttributes<HTMLElement> {}

function PaymentDetailsContainer({ className, children }: PaymentDetailsProps) {
  return (
    <div className={cn("flex flex-col gap-10   shadow-md-sm bg-white p-5", className)}>{children}</div>
  );
}

function PaymentDetailsContainerResume({
  className,
  children,
}: PaymentDetailsProps) {
  return (
    <div className={cn("flex items-center gap-3 ", className)}>{children}</div>
  );
}
function PaymentDetailsContainerResumeTitle({
  className,
  children,
}: PaymentDetailsProps) {
  return <h3 className={cn("text-2xl", className)}>{children}</h3>;
}
function PaymentDetailsContainerResumeNumberOfItens({
  className,
  children,
}: PaymentDetailsProps) {
  return <p className={cn("text-sm", className)}>{children}</p>;
}
function PaymentDetails({
  className,
  children,
}: PaymentDetailsProps) {
  return <div className={cn("flex items-center justify-between", className)}>{children}</div>;
}


function PaymentDetailsTitle({ className, children }: PaymentDetailsProps) {
  return (
    <h4 className={cn("flex items-center justify-between", className)}>
      {children}
    </h4>
  );
}
function PaymentDetailsValue({ className, children }: PaymentDetailsProps) {
  return (
    <p className={cn("flex items-center justify-between", className)}>
      {children}
    </p>
  );
}
function PaymentDetailsSeparator({ className, children }: PaymentDetailsProps) {
  return (
    <h4 className={cn("w-full h-[2px] bg-gray-300", className)}>{children}</h4>
  );
}

export {
  PaymentDetailsContainer,
  PaymentDetailsContainerResume,
  PaymentDetailsContainerResumeTitle,
  PaymentDetailsContainerResumeNumberOfItens,
  PaymentDetails,
  PaymentDetailsTitle,
  PaymentDetailsValue,
  PaymentDetailsSeparator,
};
