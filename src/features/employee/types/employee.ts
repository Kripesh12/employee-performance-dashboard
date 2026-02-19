export type Department = "Engineering" | "HR" | "Sales" | "Finance";
export type EmployeeStatus = "Active" | "On Leave" | "Resigned";
export type SortBy =
  | "name_asc"
  | "name_desc"
  | "performance_asc"
  | "performance_desc"
  | "joining_date_asc"
  | "joining_date_desc";

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

export type EmployeeFilters = {
  search: string;
  department: string | null;
  status: string | null;
  performanceScore: number;
  sortBy: SortBy | null;
};
