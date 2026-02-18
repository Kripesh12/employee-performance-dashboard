import AppAvatar from "@/shared/components/app-avatar";
import { AppButton } from "@/shared/components/app-button";
import { AppDepartmentBadge } from "@/shared/components/app-department-badge";
import { AppPerformanceBadge } from "@/shared/components/app-performance-badge";
import { AppStarRating } from "@/shared/components/app-star-rating";
import { Card } from "@/shared/ui/card";

export default function EmployeeCard() {
  return (
    <Card className="p-3">
      <div className="flex justify-between items-center">
        <AppAvatar />
        <AppPerformanceBadge status="EXCEEDING" />
      </div>

      <div className="space-y-1">
        <h2 className="text-lg">Sarah Jenkins</h2>
        <p className="text-sm text-[#64748B]">Lead Developer</p>
        <AppDepartmentBadge department="Engineering" />
      </div>

      <div className="flex justify-between">
        <p className="text-sm text-[#64748B]">Performance Score</p>
        <p className="text-sm font-bold">95/100</p>
      </div>

      <div>
        <AppStarRating total={5} />
      </div>

      <AppButton variant={"secondary"}>Edit Employee</AppButton>
    </Card>
  );
}
