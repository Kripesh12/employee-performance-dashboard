import { useQuery } from "@tanstack/react-query";
import {
  fetchDepartmentOptions,
  fetchStatusOptions,
} from "../api/employee.api";
import { employeeKeys } from "../api/employee.keys";

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
