import * as React from "react"
import { cn } from "../../lib/utils"

const ChevronDownIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className="relative">
      <select
        className={cn(
          "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground" />
    </div>
  )
})
Select.displayName = "Select"

export { Select }
