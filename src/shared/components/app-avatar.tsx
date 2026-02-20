import { cn } from "@/shared/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "../ui";

type AppAvatarProps = {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export function AppAvatar({
  src,
  alt,
  fallback,
  size = "md",
  className,
}: AppAvatarProps) {
  const sizeClass = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-14 w-14",
    xl: "h-20 w-20",
  };
  return (
    <Avatar className={cn(sizeClass[size], "rounded-full", className)}>
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : (
        <AvatarFallback>{fallback ?? "?"}</AvatarFallback>
      )}
    </Avatar>
  );
}
