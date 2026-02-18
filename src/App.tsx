import DashboardLayout from "./app/layout/dashboard-layout";
import EmployeeFilters from "./features/employee/components/employee-filters";
import EmployeeList from "./features/employee/components/employee-list";

function App() {
  return (
    <DashboardLayout>
      <div className="space-y-8 px-10">
        <EmployeeFilters />
        <EmployeeList />
      </div>
    </DashboardLayout>
  );
}

export default App;
