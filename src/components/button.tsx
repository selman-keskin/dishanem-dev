import type { ComponentPropsWithRef } from "react";

type ButtonStyle = {
  variant?: "primary" | "secondary";
};

type ButtonProps = ComponentPropsWithRef<"button"> & ButtonStyle;
type ButtonLinkProps = ComponentPropsWithRef<"a"> & ButtonStyle & { href: string };

export function Button({ variant = "primary", className = "", type = "button", ...props }: ButtonProps) {
  return <button {...props} type={type} className={`button button--${variant} ${className}`} />;
}

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <a {...props} className={`button button--${variant} ${className}`} />;
}
