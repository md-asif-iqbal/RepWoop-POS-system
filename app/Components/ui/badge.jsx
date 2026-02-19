"use client";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-transparent bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
        secondary: "border-transparent bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
        success: "border-transparent bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
        destructive: "border-transparent bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400",
        warning: "border-transparent bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400",
        info: "border-transparent bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400",
        outline: "text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
