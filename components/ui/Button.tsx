import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-[32px] py-[14px] rounded-[4px] transition-colors duration-[var(--duration-fast)] ease-[var(--ease-premium)] font-medium text-[14px] uppercase tracking-[0.05em]";
  
  const variantStyles = {
    primary: "bg-[#2B2B2B] text-white border-none",
    secondary: "bg-transparent border border-[#2B2B2B] text-[#2B2B2B]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{ fontFamily: "var(--sdk-font-body)" }}
      {...props}
    >
      {children}
    </button>
  );
}
