export type Department = "Engineering" | "HR" | "Sales" | "Finance";
export type EmployeeStatus = "Active" | "On Leave" | "Resigned";

export interface Employee {
  id: string;
  avatarUrl?: string;
  name: string;
  department: Department;
  role: string;
  performanceScore: number;
  status: EmployeeStatus;
  joiningDate: string;
}
