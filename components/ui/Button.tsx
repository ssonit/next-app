import { NextPage } from "next";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/utils";

const buttonVariants = cva("p-2 rounded-md bg-slate-900", {
  variants: {
    variant: {
      default: "bg-zinc-900 text-zinc-100 hover:bg-zinc-800",
      destructive: "text-white hover:bg-red-600 dark:hover:bg-red-600",
      outline:
        "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 outline outline-1 outline-zinc-300",
      subtle: "hover:bg-zinc-200 bg-zinc-100 text-zinc-900",
      ghost: "bg-transparent hover:bg-zinc-100 text-zinc-800",
      link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-2 rounded-md",
      xs: "h-8 px-1.5 rounded-sm",
      lg: "h-11 px-8 rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: NextPage<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, variant, isLoading, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={isLoading}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
