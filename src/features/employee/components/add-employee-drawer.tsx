import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/shared/ui";

import { AddEmployeeForm } from "./";
import type { EmployeeFormValues } from "../schema";
import { useSaveEmployee } from "../hooks";

type AddEmployeeDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AddEmployeeDrawer({
  open,
  onOpenChange,
}: AddEmployeeDrawerProps) {
  const { mutate: saveEmployee, isPending } = useSaveEmployee();

  function handleSubmit(values: EmployeeFormValues) {
    saveEmployee(values, {
      onSuccess: () => onOpenChange(false),
    });
  }
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-100 sm:w-125">
        <SheetHeader>
          <SheetTitle>Add New Employee</SheetTitle>
          <SheetDescription>Enter employee details below.</SheetDescription>
        </SheetHeader>

        <div className="space-y-4 py-6">
          <AddEmployeeForm
            onSubmit={handleSubmit}
            onCancel={() => onOpenChange(false)}
            isSubmitting={isPending}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
