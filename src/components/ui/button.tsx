import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        wellness: "bg-wellness-primary text-white hover:bg-wellness-primary/90 shadow-wellness transition-smooth",
        "mood-very-sad": "bg-mood-very-sad/10 text-mood-very-sad border border-mood-very-sad/20 hover:bg-mood-very-sad/20 transition-bounce",
        "mood-sad": "bg-mood-sad/10 text-mood-sad border border-mood-sad/20 hover:bg-mood-sad/20 transition-bounce",
        "mood-neutral": "bg-mood-neutral/10 text-mood-neutral border border-mood-neutral/20 hover:bg-mood-neutral/20 transition-bounce",
        "mood-happy": "bg-mood-happy/10 text-mood-happy border border-mood-happy/20 hover:bg-mood-happy/20 transition-bounce",
        "mood-very-happy": "bg-mood-very-happy/10 text-mood-very-happy border border-mood-very-happy/20 hover:bg-mood-very-happy/20 transition-bounce",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
