import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-cyan-400 text-neutral-900 shadow-lg shadow-cyan-400/25 hover:bg-cyan-300 hover:shadow-cyan-300/30 hover:shadow-xl',
        outline:
          'border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-primary/70 hover:text-primary'
      },
      size: {
        default: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 text-base min-w-[10rem]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
