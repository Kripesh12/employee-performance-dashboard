import { AppComboBox } from "@/shared/components/app-combobox";
import { AppSlider } from "@/shared/components/app-slider";
import { Button } from "@base-ui/react";
import { useState } from "react";

export default function EmployeeFilters() {
  const [department, setDepartment] = useState<string | null>(null);

  const demartmentValues = [
    {
      label: "Engineering",
      value: "engineering",
    },
    {
      value: "hr",
      label: "HR",
    },

    {
      value: "sales",
      label: "Sales",
    },
    {
      value: "finance",
      label: "Finance",
    },
  ];
  return (
    <div className="flex justify-between bg-white">
      <AppComboBox
        data={demartmentValues}
        value={department}
        onChange={setDepartment}
      />

      <AppComboBox
        data={demartmentValues}
        value={department}
        onChange={setDepartment}
      />

      <AppComboBox
        data={demartmentValues}
        value={department}
        onChange={setDepartment}
      />

      <AppSlider />

      <Button>Apply Filters</Button>
    </div>
  );
}
