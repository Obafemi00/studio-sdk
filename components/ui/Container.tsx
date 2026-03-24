import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Global layout shell: 1200px max width, 32px horizontal padding */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-8 ${className}`}>
      {children}
    </div>
  );
}
