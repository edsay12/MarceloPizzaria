import { FormHTMLAttributes, InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

function Form({ className, children }: FormProps) {
  return (
    <form className={cn("flex flex-col gap-6 ", className)}>
      {children}
    </form>
  );
}
function FormGroup({ className, children }: FormProps) {
  return (
    <div className={cn("flex gap-5 w-full flex-grow ", className)}>
      {children}
    </div>
  );
}


type InputWithLabelType = {
    labelTitle: string;
  } & InputHTMLAttributes<HTMLInputElement>;
  
  function InputWithLabel({ labelTitle, className,...rest }: InputWithLabelType) {
    return (
      <label htmlFor=""  className="flex flex-col gap-3 w-full text-xs">
        {labelTitle}
        <input className={cn("w-full p-2 shadow-lg outline-none rounded-lg border-none", className)}  {...rest}/>
  
      </label>
    );
  }
  



export {Form,InputWithLabel,FormGroup}