import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import type { EmployeeFormValues } from "../../schema";
import type { Employee } from "../../types";

import { updateEmployee, employeeKeys } from "../../api";

import { DEPARTMENT_MAP, STATUS_MAP } from "../../constants";

function buildUpdatePayload(id: string, values: EmployeeFormValues): Employee {
  return {
    ...values,
    id,
    department: DEPARTMENT_MAP[values.department],
    status: STATUS_MAP[values.status],
  };
}

function updateEmployeeById(id: string, values: EmployeeFormValues) {
  const payload = buildUpdatePayload(id, values);
  return updateEmployee(payload);
}

export function useUpdateEmployee(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: EmployeeFormValues) => updateEmployeeById(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: employeeKeys.all });
      toast.success("Employee updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update employee:", error);
      toast.error("Failed to update employee");
    },
  });
}
