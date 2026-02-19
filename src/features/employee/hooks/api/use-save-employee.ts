import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { EmployeeFormValues } from "../../schema/add-employee-schema";
import { saveEmployee } from "../../api/employee.api";
import { generateId } from "@/shared/lib/utils";
import { employeeKeys } from "../../api/employee.keys";
import { DEPARTMENT_MAP, STATUS_MAP } from "../../constants";
import type { Employee } from "../../types";
import { toast } from "sonner";

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
