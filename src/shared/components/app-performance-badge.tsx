import { cn } from "@/shared/lib";
import { Badge } from "../ui";

type BadgeStatus = "EXCEEDING" | "MEETING" | "NEEDS IMPROVEMENT" | "IN REVIEW";

interface AppPerformanceBadgeProps {
  className?: string;
  performanceScore: number;
}

const SCORE_TO_STATUS: Record<number, BadgeStatus> = {
  5: "EXCEEDING",
  4: "MEETING",
  3: "IN REVIEW",
  2: "NEEDS IMPROVEMENT",
  1: "NEEDS IMPROVEMENT",
};

const STATUS_STYLES: Record<BadgeStatus, string> = {
  EXCEEDING: "text-[#047857] bg-[#A7F3D0]",
  MEETING: "text-[#1D4ED8] bg-[#BFDBFE]",
  "NEEDS IMPROVEMENT": "text-[#B91C1C] bg-[#FECACA]",
  "IN REVIEW": "text-[#B45309] bg-[#FDE68A]",
};

function getStatus(score: number): BadgeStatus {
  if (score < 1 || score > 5) return "IN REVIEW";
  return SCORE_TO_STATUS[Math.round(score)];
}

export function AppPerformanceBadge({
  performanceScore,
  className,
}: AppPerformanceBadgeProps) {
  const status = getStatus(performanceScore);

  return (
    <Badge className={cn(STATUS_STYLES[status], className)}>
      <span className="text-xs font-bold py-1 px-2.5 block">{status}</span>
    </Badge>
  );
}
