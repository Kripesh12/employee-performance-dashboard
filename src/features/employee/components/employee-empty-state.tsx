export function EmployeeEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-lg font-medium">No employees found</p>
      <p className="text-sm text-muted-foreground mt-1">
        Try adjusting your search or filters
      </p>
    </div>
  );
}
