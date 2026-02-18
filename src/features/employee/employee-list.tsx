import EmployeeCard from "./employee-card";

export default function EmployeeList() {
  return (
    <div className="bg-white grid grid-cols-4 gap-4">
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
    </div>
  );
}
