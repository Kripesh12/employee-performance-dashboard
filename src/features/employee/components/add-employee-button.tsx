import { AppButton } from "@/shared/components/app-button";
import { useState } from "react";
import { AddEmployeeDrawer } from "./add-employee-drawer";

export function AddEmployeeButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppButton onClick={() => setOpen(true)}>Add Employee</AppButton>
      <AddEmployeeDrawer open={open} onOpenChange={setOpen} />
    </>
  );
}
