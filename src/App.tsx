import DashboardLayout from "./app/layout/dashboard-layout";
import EmployeeFilters from "./features/employee/components/employee-filters";
import EmployeeList from "./features/employee/components/employee-list";

function App() {
  return (
    <DashboardLayout>
      <EmployeeFilters />
      <EmployeeList />
    </DashboardLayout>
  );
}

export default App;
