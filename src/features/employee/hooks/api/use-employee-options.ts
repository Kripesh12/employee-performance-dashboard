import { useQuery } from "@tanstack/react-query";
import {
  fetchDepartmentOptions,
  fetchSortOptions,
  fetchStatusOptions,
} from "../../api/employee.api";
import { employeeKeys } from "../../api/employee.keys";

export function useDepartmentOptions() {
  return useQuery({
    queryKey: employeeKeys.departments,
    queryFn: fetchDepartmentOptions,
  });
}

export function useStatusOptions() {
  return useQuery({
    queryKey: employeeKeys.statuses,
    queryFn: fetchStatusOptions,
  });
}

export function useSortOptions() {
  return useQuery({
    queryKey: employeeKeys.sortOptions,
    queryFn: fetchSortOptions,
    staleTime: Infinity,
  });
}
