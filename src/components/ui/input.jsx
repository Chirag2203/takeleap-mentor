import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border hover:dark:border-secondary hover:border-secondary   dark:border-gray-500 bg-gray-200  border-gray-300 dark:bg-gray-800 px-4 py-2 text-sm file:border-0  focus:file:bg-transparent file:text-sm file:font-medium  placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
