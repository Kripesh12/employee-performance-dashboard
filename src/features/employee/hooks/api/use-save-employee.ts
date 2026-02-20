import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import type { EmployeeFormValues } from "../../schema";
import type { Employee } from "../../types";

import { saveEmployee, employeeKeys } from "../../api";

import { DEPARTMENT_MAP, STATUS_MAP } from "../../constants";
import { generateId } from "@/shared/lib/utils";

function buildEmployeePayload(values: EmployeeFormValues): Employee {
  return {
    ...values,
    id: generateId(),
    department: DEPARTMENT_MAP[values.department],
    status: STATUS_MAP[values.status],
  };
}

function createEmployee(values: EmployeeFormValues) {
  const payload = buildEmployeePayload(values);
  return saveEmployee(payload);
}

export function useSaveEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: employeeKeys.all });
      toast.success("Employee added successfully!");
    },
    onError: (error) => {
      console.error("Failed to save employee:", error);
      toast.error("Failed to add employee");
    },
  });
}
