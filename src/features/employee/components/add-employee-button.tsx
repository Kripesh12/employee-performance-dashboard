import { AppButton } from "@/shared/components/app-button";
import { useState } from "react";
import { AddEmployeeDrawer } from "./add-employee-drawer";
import { FaPlus } from "react-icons/fa";

export function AddEmployeeButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppButton onClick={() => setOpen(true)} leftIcon={<FaPlus />}>
        Add Employee
      </AppButton>
      <AddEmployeeDrawer open={open} onOpenChange={setOpen} />
    </>
  );
}
