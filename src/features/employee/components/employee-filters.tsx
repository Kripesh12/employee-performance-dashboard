import { AppComboBox } from "@/shared/components/app-combobox";
import { AppSlider } from "@/shared/components/app-slider";
import { useState } from "react";
import {
  DEPARTMENT_OPTIONS,
  STATUS_OPTIONS,
  SORT_OPTIONS,
} from "../constants/filter-options";
import { DEFAULT_FILTERS, type FilterState } from "../types/employee-filters";
import { AppButton } from "@/shared/components";
import { FaFilter } from "react-icons/fa";

interface EmployeeFiltersProps {
  onApply: (filters: FilterState) => void;
  onReset?: () => void;
}

export default function EmployeeFilters({ onApply }: EmployeeFiltersProps) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  function updateFilter(key: string, value: unknown) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="flex justify-around bg-white p-6 rounded-2xl">
      <AppComboBox
        label="Department"
        data={DEPARTMENT_OPTIONS}
        value={filters.department}
        onChange={(val) => updateFilter("department", val)}
      />

      <AppComboBox
        label="Status"
        data={STATUS_OPTIONS}
        value={filters.status}
        onChange={(val) => updateFilter("status", val)}
      />

      <AppSlider
        label="Performance Score"
        min={0}
        max={5}
        value={filters.performanceScore}
        onChange={(val) =>
          updateFilter("performanceScore", val as [number, number])
        }
      />

      <AppComboBox
        label="Sort By"
        data={SORT_OPTIONS}
        value={filters.sortBy}
        onChange={(val) => updateFilter("sortBy", val)}
      />

      <AppButton onClick={() => onApply(filters)} leftIcon={<FaFilter />}>
        Apply Filters
      </AppButton>
    </div>
  );
}
