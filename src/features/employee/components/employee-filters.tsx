import { useState } from "react";
import { IoFilter } from "react-icons/io5";

import type { SortBy } from "../types";

import {
  useFilterActions,
  useFilterDepartment,
  useFilterScore,
  useFilterSortBy,
  useFilterStatus,
} from "../store";

import {
  useDepartmentOptions,
  useSortOptions,
  useStatusOptions,
} from "../hooks";

import { AppComboBox, AppSlider, AppButton } from "@/shared/components";

export default function EmployeeFilters() {
  const { setDepartment, setStatus, setPerformanceScore, setSortBy } =
    useFilterActions();

  const department = useFilterDepartment();
  const status = useFilterStatus();
  const score = useFilterScore();
  const sortBy = useFilterSortBy();

  const { data: departments, isLoading: loadingDepts } = useDepartmentOptions();
  const { data: statuses, isLoading: loadingStatuses } = useStatusOptions();
  const { data: sortOptions, isLoading: loadingSort } = useSortOptions();

  //local state for apply filter button
  const [filter, setFilter] = useState({
    department,
    status,
    score,
    sortBy,
  });

  function handleApply() {
    setDepartment(filter.department);
    setStatus(filter.status);
    setPerformanceScore(filter.score);
    setSortBy(filter.sortBy as SortBy | null);
  }

  return (
    <div className="bg-white p-4 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <AppComboBox
          label="Department"
          data={departments ?? []}
          value={filter.department ?? ""}
          isLoading={loadingDepts}
          onChange={(val) =>
            setFilter((prev) => ({ ...prev, department: val }))
          }
        />

        <AppComboBox
          label="Status"
          data={statuses ?? []}
          value={filter.status ?? ""}
          isLoading={loadingStatuses}
          onChange={(val) => setFilter((prev) => ({ ...prev, status: val }))}
        />

        <AppSlider
          label="Performance Score"
          min={0}
          max={5}
          value={filter.score}
          onChange={(val) => setFilter((prev) => ({ ...prev, score: val }))}
        />

        <AppComboBox
          label="Sort By"
          data={sortOptions ?? []}
          value={filter.sortBy}
          onChange={(val) =>
            setFilter((prev) => ({ ...prev, sortBy: val as SortBy | null }))
          }
          isLoading={loadingSort}
        />

        <div className="flex justify-end mt-4">
          <AppButton
            leftIcon={<IoFilter />}
            className="w-full sm:w-auto"
            onClick={handleApply}
          >
            Apply Filters
          </AppButton>
        </div>
      </div>
    </div>
  );
}
