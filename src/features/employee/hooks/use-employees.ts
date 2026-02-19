import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../api/employee.api";
import { employeeKeys } from "../api/employee.keys";

export function useEmployees() {
  return useQuery({
    queryKey: employeeKeys.all,
    queryFn: fetchEmployees,
  });
}
