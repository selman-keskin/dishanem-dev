import type { ComponentPropsWithRef } from "react";

type InputProps = ComponentPropsWithRef<"input"> & {
  id: string;
  label: string;
};

export function Input({ id, label, className = "", ...props }: InputProps) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} className={`input ${className}`} />
    </div>
  );
}
