import * as React from "react";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/lib/utils";

interface AppInputProps extends React.ComponentProps<"input"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function AppInput({
  leftIcon,
  rightIcon,
  className,
  ...props
}: AppInputProps) {
  return (
    <div className={cn("relative w-full ")}>
      {leftIcon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {leftIcon}
        </span>
      )}

      <Input
        className={cn(
          leftIcon ? "pl-10" : "",
          rightIcon ? "pr-10" : "",
          "rounded-2xl",
          className,
        )}
        {...props}
      />

      {rightIcon && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {rightIcon}
        </span>
      )}
    </div>
  );
}
