import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium rounded-sm transition-colors duration-150 ease-standard focus-visible:outline-none focus-visible:shadow-focus focus-visible:ring-2 focus-visible:ring-ring-blue active:opacity-80 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-charcoal text-off-white shadow-inset",
        outline: "border border-border-light text-charcoal hover:border-charcoal-40 duration-250",
        surface: "bg-charcoal-04 text-charcoal hover:bg-charcoal-10",
        ghost: "text-charcoal hover:bg-charcoal-04",
        pill: "rounded-pill bg-charcoal-04 text-charcoal hover:bg-charcoal-10",
        link: "text-charcoal underline underline-offset-[3px] h-auto p-0",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
