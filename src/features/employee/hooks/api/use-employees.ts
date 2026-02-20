import { useQuery } from "@tanstack/react-query";

import { employeeKeys, fetchEmployees } from "../../api";

export function useEmployees() {
  return useQuery({
    queryKey: employeeKeys.all,
    queryFn: fetchEmployees,
  });
}
