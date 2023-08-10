import { ComponentProps } from "react";

interface DateInputProps extends ComponentProps<"input"> {
  label: string;
}

export function DateInput({ label, ...props }: DateInputProps) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" id={label} name={label} {...props} />
    </div>
  );
}
