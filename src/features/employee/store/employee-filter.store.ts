import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

import type { EmployeeFilters, SortBy } from "../types";

type FilterActions = {
  setSearch: (value: string) => void;
  setDepartment: (value: string | null) => void;
  setStatus: (value: string | null) => void;
  setPerformanceScore: (value: number) => void;
  setSortBy: (value: SortBy | null) => void;
  resetFilters: () => void;
};

export const DEFAULT_FILTERS: EmployeeFilters = {
  search: "",
  department: null,
  status: null,
  performanceScore: 3,
  sortBy: null,
};

export const useEmployeeFilterStore = create<EmployeeFilters & FilterActions>(
  (set) => ({
    ...DEFAULT_FILTERS,
    setSearch: (value) => set({ search: value }),
    setDepartment: (value) => set({ department: value }),
    setStatus: (value) => set({ status: value }),
    setPerformanceScore: (value) => set({ performanceScore: value }),
    setSortBy: (value) => set({ sortBy: value }),
    resetFilters: () => set(DEFAULT_FILTERS),
  }),
);

//selector and sliced state reduce unnecessay rerenders

//reading states
export const useFilterSearch = () => useEmployeeFilterStore((s) => s.search);
export const useFilterDepartment = () =>
  useEmployeeFilterStore((s) => s.department);
export const useFilterStatus = () => useEmployeeFilterStore((s) => s.status);
export const useFilterScore = () =>
  useEmployeeFilterStore((s) => s.performanceScore);
export const useFilterSortBy = () => useEmployeeFilterStore((s) => s.sortBy);

//writing states
export const useFilterActions = () =>
  useEmployeeFilterStore(
    useShallow((s) => ({
      setSearch: s.setSearch,
      setDepartment: s.setDepartment,
      setStatus: s.setStatus,
      setPerformanceScore: s.setPerformanceScore,
      setSortBy: s.setSortBy,
      resetFilters: s.resetFilters,
    })),
  );
