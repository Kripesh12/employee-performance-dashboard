import { useEmployees } from "../hooks/use-employees";
import type { Employee } from "../types";
import EmployeeCard from "./employee-card";
import { EmployeeErrorState } from "./employee-error";
import { EmployeeListLoading } from "./employee-skeleton";

export default function EmployeeList() {
  const { data, error, isLoading, refetch } = useEmployees();

  function onEdit(id: string) {
    console.log(id);
  }

  if (isLoading) return <EmployeeListLoading />;

  if (error) return <EmployeeErrorState onRetry={refetch} />;

  if (!data?.length) return <div>No employees found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((employee: Employee) => (
        <EmployeeCard key={employee.id} employee={employee} onEdit={onEdit} />
      ))}
    </div>
  );
}
