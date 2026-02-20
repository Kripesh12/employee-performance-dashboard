import { LucideUserRoundSearch } from "lucide-react";
import { MdFilterListOff } from "react-icons/md";
import { HiOutlineUserAdd } from "react-icons/hi";

import { useUIActions, useFilterActions } from "../store";

import { AppButton } from "@/shared/components";

export function EmployeeEmptyState() {
  const { openAddDrawer } = useUIActions();
  const { resetFilters } = useFilterActions();

  return (
    <div className="flex flex-col items-center justify-center py-30 text-center bg-white rounded-2xl space-y-6">
      <div className="bg-[#F1F5F9] p-8 rounded-full">
        <LucideUserRoundSearch size={40} color="#CBD5E1" />
      </div>
      <div className="space-y-2 max-w-100">
        <p className="text-[24px] font-bold">No employees found</p>
        <p className="text-md text-muted-foreground">
          Try adjusting your filters or add a new employee to get started.
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <AppButton onClick={openAddDrawer} leftIcon={<HiOutlineUserAdd />}>
          Add Employee
        </AppButton>
        <AppButton
          variant="outline"
          leftIcon={<MdFilterListOff />}
          onClick={resetFilters}
        >
          Reset Filters
        </AppButton>
      </div>
    </div>
  );
}
