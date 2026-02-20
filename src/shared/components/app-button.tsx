import type { ReactNode, ButtonHTMLAttributes } from "react";

import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib/utils";

import { FaSpinner } from "react-icons/fa";

type ButtonVariant =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;

type ButtonSize =
  | "default"
  | "sm"
  | "lg"
  | "xs"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg"
  | null
  | undefined;

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
}

export function AppButton({
  variant = "default",
  size = "default",
  leftIcon,
  rightIcon,
  loading = false,
  className,
  children,
  disabled,
  ...props
}: AppButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled || loading}
      className={cn(
        "inline-flex font-bold rounded-2xl items-center justify-center gap-2",
        className,
      )}
      {...props}
    >
      {loading ? (
        <FaSpinner className="animate-spin" />
      ) : (
        leftIcon && <span className="flex items-center">{leftIcon}</span>
      )}

      {children}

      {!loading && rightIcon && (
        <span className="flex items-center">{rightIcon}</span>
      )}
    </Button>
  );
}
