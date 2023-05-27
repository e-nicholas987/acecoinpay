/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from "classnames";
import { ChangeEvent } from "react";
import { FieldError } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  icon?: JSX.Element;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  register: any;
  error?: FieldError;
}

const FormInput = ({
  type = "number",
  name,
  icon,
  onChange,
  register,
  error,
  ...rest
}: Props) => {
  return (
    <div className="relative w-full">
      <input
        {...register(name)}
        type={type}
        name={name}
        onChange={onChange}
        autoComplete="off"
        className={cn(
          `w-full rounded-xl h-[60px] border border-border p-4 font-semibold text-primary bg-white focus:bg-[#F1F5FE] focus:text-focus focus:border-2 focus:border-focus transition-all duration-300`,
          {
            "text-center": type === "number",
            "border-2 border-danger": error,
          }
        )}
        {...rest}
      />
      {icon && (
        <div className="text-manatee grid place-content-center absolute top-0 h-full right-4">
          {icon}
        </div>
      )}
      {error && (
        <p className="absolute bottom-[-20px] text-danger text-xs mt-2 hidden xs:block">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
