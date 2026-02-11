import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-md border border-transparent px-2 py-0.5 text-xs font-semibold tracking-wider uppercase w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",

                active: "bg-emerald-100/80 text-emerald-700",
                pending: "bg-amber-100 text-amber-600",
                inactive: "bg-red-100/80 text-red-600"
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function Badge({
                   className,
                   variant = "default",
                   asChild = false,
                   ...props
               }: React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot : "span"

    return (
        <Comp
            data-slot="badge"
            data-variant={variant}
            className={cn(badgeVariants({variant}), className)}
            {...props}
        />
    )
}

export {Badge, badgeVariants}
