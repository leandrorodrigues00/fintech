import { CSSProperties, ComponentProps } from "react";

const baseStyle: CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyle: CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: 600,
  ...baseStyle,
};

const inputStyle: CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...baseStyle,
};

interface DateInputProps extends ComponentProps<"input"> {
  label: string;
}

export function DateInput({ label, ...props }: DateInputProps) {
  return (
    <div>
      <label htmlFor={label} style={labelStyle}>
        {label}
      </label>
      <input
        type="date"
        id={label}
        name={label}
        {...props}
        style={inputStyle}
      />
    </div>
  );
}
