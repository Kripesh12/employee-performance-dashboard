import { useMemo } from "react";
import type { Employee, EmployeeFilters, SortBy } from "../../types";
import { useEmployees } from "../api/use-employees";
import {
  useEmployeeFilterStore,
  useFilterSearch,
} from "../../store/employee-filter-store";
import { useShallow } from "zustand/react/shallow";
import { useDebounce } from "@/shared/hooks/use-debounce";

function matchesSearch(employee: Employee, search: string): boolean {
  if (!search) return true;
  const query = search.toLowerCase();
  return (
    employee.name.toLowerCase().includes(query) ||
    employee.role.toLowerCase().includes(query)
  );
}

function matchesDepartment(
  employee: Employee,
  department: string | null,
): boolean {
  if (!department) return true;
  return employee.department.toLowerCase() === department.toLowerCase();
}

function matchesStatus(employee: Employee, status: string | null): boolean {
  if (!status) return true;
  return employee.status.toLowerCase() === status.toLowerCase();
}

function matchesScore(employee: Employee, score: number): boolean {
  return employee.performanceScore >= score;
}

function sortEmployees(
  employees: Employee[],
  sortBy: SortBy | null,
): Employee[] {
  if (!sortBy) return employees;

  return [...employees].sort((a, b) => {
    switch (sortBy) {
      case "name_asc":
        return a.name.localeCompare(b.name);
      case "name_desc":
        return b.name.localeCompare(a.name);
      case "performance_asc":
        return a.performanceScore - b.performanceScore;
      case "performance_desc":
        return b.performanceScore - a.performanceScore;
      case "joining_date_asc":
        return (
          new Date(a.joiningDate).getTime() - new Date(b.joiningDate).getTime()
        );
      case "joining_date_desc":
        return (
          new Date(b.joiningDate).getTime() - new Date(a.joiningDate).getTime()
        );
      default:
        return 0;
    }
  });
}

function filterEmployees(
  employees: Employee[],
  filters: EmployeeFilters,
): Employee[] {
  const filtered = employees.filter(
    (employee) =>
      matchesSearch(employee, filters.search) &&
      matchesDepartment(employee, filters.department) &&
      matchesStatus(employee, filters.status) &&
      matchesScore(employee, filters.performanceScore),
  );
  return sortEmployees(filtered, filters.sortBy);
}

export function useFilteredEmployees() {
  const { data: employees = [], isLoading, isError } = useEmployees();

  const filters = useEmployeeFilterStore(
    useShallow((s) => ({
      search: s.search,
      department: s.department,
      status: s.status,
      performanceScore: s.performanceScore,
      sortBy: s.sortBy,
    })),
  );

  const search = useFilterSearch();
  const debouncedSearch = useDebounce(search, 300);

  //caching
  const filtered = useMemo(
    () => filterEmployees(employees, { ...filters, search: debouncedSearch }),
    [employees, filters, debouncedSearch],
  );

  return {
    filtered,
    isLoading,
    isError,
    total: employees.length,
  };
}
