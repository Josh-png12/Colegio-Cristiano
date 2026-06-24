import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "accent";
  size?: "default" | "sm" | "lg" | "icon";
}

const variantStyles = {
  default: "bg-primary text-white hover:bg-primary/90",
  accent:
    "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "hover:bg-gray-100 hover:text-primary",
  link: "text-primary underline-offset-4 hover:underline",
};

const sizeStyles = {
  default: "h-10 px-5 py-2 text-sm",
  sm: "h-9 rounded-md px-3 text-xs",
  lg: "h-14 rounded-xl px-8 text-base font-semibold",
  icon: "h-10 w-10",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
