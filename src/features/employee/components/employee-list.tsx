import { MOCK_EMPLOYEES } from "../mocks/employees";
import type { Employee } from "../types";
import EmployeeCard from "./employee-card";

export default function EmployeeList() {
  function onEdit(id: string) {
    console.log(id);
  }
  return (
    <div className=" grid grid-cols-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {MOCK_EMPLOYEES.map((employee: Employee) => (
        <EmployeeCard employee={employee} onEdit={onEdit} />
      ))}
    </div>
  );
}
