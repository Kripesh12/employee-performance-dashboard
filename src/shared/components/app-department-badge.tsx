import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

type Department = "Engineering" | "HR" | "Sales" | "Finance";

interface AppDepartmentBadgeProps {
  department: Department;
  className?: string;
}

export function AppDepartmentBadge({
  department,
  className,
}: AppDepartmentBadgeProps) {
  return (
    <Badge
      className={cn(
        "bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 h-auto rounded-md border border-gray-300",
        className,
      )}
    >
      {department}
    </Badge>
  );
}
