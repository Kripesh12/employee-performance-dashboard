import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/shared/ui/sheet";
import { AddEmployeeForm } from "./add-employee-form";
import type { Employee } from "../types";
import type { EmployeeFormValues } from "../schema/add-employee-schema";
import { useUpdateEmployee } from "../hooks/api/use-update-employee";

interface EditEmployeeDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employee: Employee | null;
}

export function EditEmployeeDrawer({
  open,
  onOpenChange,
  employee,
}: EditEmployeeDrawerProps) {
  const { mutate: updateEmployee, isPending } = useUpdateEmployee(
    employee?.id ?? "",
  );

  function handleSubmit(values: EmployeeFormValues) {
    updateEmployee(values, {
      onSuccess: () => onOpenChange(false),
    });
  }

  if (!employee) return null;

  console.log("Edit employee employee: ", employee);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-100 sm:w-125 flex flex-col">
        <SheetHeader>
          <SheetTitle>Edit Employee</SheetTitle>
          <SheetDescription>Update employee details below.</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          <AddEmployeeForm
            key={employee.id}
            onSubmit={handleSubmit}
            onCancel={() => onOpenChange(false)}
            isSubmitting={isPending}
            employee={employee}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
