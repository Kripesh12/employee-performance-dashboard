import { usePagination, useFilteredEmployees } from "../hooks";

import {
  useEditingEmployee,
  useIsAddDrawerOpen,
  useIsEditDrawerOpen,
  useUIActions,
} from "../store";

import {
  EmployeeCard,
  EmployeeEmptyState,
  EmployeeErrorState,
  EmployeePagination,
  EmployeeResultCount,
  EmployeeListLoading,
  EditEmployeeDrawer,
  AddEmployeeDrawer,
} from "./";

const ITEMS_PER_PAGE = 8;

export default function EmployeeList() {
  const { filtered, isLoading, isError, total } = useFilteredEmployees();

  const isAddDrawerOpen = useIsAddDrawerOpen();
  const isEditDrawerOpen = useIsEditDrawerOpen();
  const editingEmployee = useEditingEmployee();
  const { closeAddDrawer, openEditDrawer, closeEditDrawer } = useUIActions();

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
            onEdit={openEditDrawer}
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

      <AddEmployeeDrawer
        open={isAddDrawerOpen}
        onOpenChange={(open) => !open && closeAddDrawer()}
      />

      <EditEmployeeDrawer
        open={isEditDrawerOpen}
        onOpenChange={(open) => !open && closeEditDrawer()}
        employee={editingEmployee}
      />
    </div>
  );
}
