import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

type BadgeStatus = "EXCEEDING" | "MEETING" | "NEEDS IMPROVEMENT" | "IN REVIEW";

interface AppBadgeProps {
  status: BadgeStatus;
  className?: string;
}

export function AppPerformanceBadge({ status, className }: AppBadgeProps) {
  const statusStyles: Record<BadgeStatus, string> = {
    EXCEEDING: "text-[#047857] bg-[#A7F3D0]",
    MEETING: "text-[#1D4ED8] bg-[#BFDBFE]",
    "NEEDS IMPROVEMENT": "text-[#B91C1C] bg-[#FECACA]",
    "IN REVIEW": "text-[#B45309] bg-[#FDE68A]",
  };

  return (
    <Badge className={cn(statusStyles[status], className)}>
      <span className="text-xs font-bold py-1 px-2.5  block">{status}</span>
    </Badge>
  );
}
