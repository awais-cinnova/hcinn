import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex items-center justify-center rounded-full cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary-color)]",
         page:"w-[15px]" 
       },
      size: {
        default: "min-w-[34px] min-h-[34px]",
        primarysize:"w-[175px] h-[48px] p-[12px] rounded-[12px] ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
