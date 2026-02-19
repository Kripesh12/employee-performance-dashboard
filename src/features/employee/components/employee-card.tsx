import {
  AppAvatar,
  AppButton,
  AppDepartmentBadge,
  AppPerformanceBadge,
  AppStarRating,
} from "@/shared/components";
import type { Employee } from "../types";
import { Card } from "@/shared/ui/card";

interface EmployeeCardProps {
  employee: Employee;
  onEdit: (id: string) => void;
}

function EmployeeHeader({ employee }: { employee: Employee }) {
  return (
    <div className="flex justify-between items-center">
      <AppAvatar size="lg" alt={employee.name} />
      <AppPerformanceBadge performanceScore={employee.performanceScore} />
    </div>
  );
}

function EmployeeIdentity({ employee }: { employee: Employee }) {
  return (
    <div className="space-y-1">
      <h2 className="text-lg font-semibold">{employee.name}</h2>
      <p className="text-sm text-muted-foreground">{employee.role}</p>
      <AppDepartmentBadge department={employee.department} />
    </div>
  );
}

function EmployeeStats({ employee }: { employee: Employee }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Performance Score</p>
        <p className="text-sm font-bold">{employee.performanceScore}/5</p>
      </div>
      <AppStarRating total={employee.performanceScore} />
    </div>
  );
}

export default function EmployeeCard({ employee, onEdit }: EmployeeCardProps) {
  return (
    <Card className="p-3 ">
      <EmployeeHeader employee={employee} />
      <EmployeeIdentity employee={employee} />
      <EmployeeStats employee={employee} />
      <AppButton
        variant="secondary"
        className="w-full"
        onClick={() => onEdit(employee.id)}
      >
        Edit Employee
      </AppButton>
    </Card>
  );
}
