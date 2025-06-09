FROM: components/ui/button.tsx
TO:   app/components/ui/button.tsx
import * as React from "react"
import { cn } from "@/utils"

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("shrink-0 bg-border h-px w-full", className)} {...props} />
  )
)
Separator.displayName = "Separator"
