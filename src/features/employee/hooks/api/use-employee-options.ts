import { useQuery } from "@tanstack/react-query";
import {
  employeeKeys,
  fetchDepartmentOptions,
  fetchSortOptions,
  fetchStatusOptions,
} from "../../api";

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
