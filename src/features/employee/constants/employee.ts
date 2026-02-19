import type { Department, EmployeeStatus } from "../types";

export const DEPARTMENT_MAP: Record<string, Department> = {
  engineering: "Engineering",
  hr: "HR",
  sales: "Sales",
  finance: "Finance",
};

export const STATUS_MAP: Record<string, EmployeeStatus> = {
  active: "Active",
  on_leave: "On Leave",
  resigned: "Resigned",
};
