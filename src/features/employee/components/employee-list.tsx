import { useState } from "react";
import { useFilteredEmployees } from "../hooks/ui/use-employee-filter";
import { usePagination } from "../hooks/ui/use-pagination";
import { EmployeeCard } from "./employee-card";
import { EmployeeEmptyState } from "./employee-empty-state";
import { EmployeeErrorState } from "./employee-error";
import { EmployeePagination } from "./employee-pagination";
import { EmployeeResultCount } from "./employee-result-count";
import { EmployeeListLoading } from "./employee-skeleton";
import { EditEmployeeDrawer } from "./edit-employee-drawer";
import type { Employee } from "../types";

const ITEMS_PER_PAGE = 8;

export default function EmployeeList() {
  const { filtered, isLoading, isError, total } = useFilteredEmployees();

  const [editTarget, setEditTarget] = useState<Employee | null>(null);
  const [editOpen, setEditOpen] = useState(false);

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    nextPage,
    prevPage,
    goToPage,
    hasNextPage,
    hasPrevPage,
  } = usePagination({
    totalItems: filtered.length,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  const paginated = filtered.slice(startIndex, endIndex);

  function handleEdit(employee: Employee) {
    setEditTarget(employee);
    setEditOpen(true);
  }

  function handleEditClose(open: boolean) {
    setEditOpen(open);
    if (!open) setEditTarget(null);
  }

  if (isLoading) return <EmployeeListLoading />;
  if (isError) return <EmployeeErrorState />;
  if (!filtered.length) return <EmployeeEmptyState />;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {paginated.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onEdit={handleEdit}
          />
        ))}
      </div>

      <div className="flex items-center justify-between p-4 rounded-2xl mt-2 bg-white">
        <EmployeeResultCount
          shown={paginated.length}
          total={total}
          from={startIndex + 1}
          to={Math.min(endIndex, filtered.length)}
        />

        {totalPages > 1 && (
          <EmployeePagination
            currentPage={currentPage}
            totalPages={totalPages}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            onNext={nextPage}
            onPrev={prevPage}
            onPageChange={goToPage}
          />
        )}
      </div>

      <EditEmployeeDrawer
        open={editOpen}
        onOpenChange={handleEditClose}
        employee={editTarget}
      />
    </div>
  );
}
