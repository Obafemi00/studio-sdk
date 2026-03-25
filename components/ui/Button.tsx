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
    "px-6 py-3 rounded-sm transition-colors duration-[var(--duration-fast)] ease-[var(--ease-premium)] font-medium text-base";
  
  const variantStyles = {
    primary: "bg-[#2B2B2B] text-white hover:bg-[#4A4A4A]",
    secondary: "border border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#F7F7F7]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
