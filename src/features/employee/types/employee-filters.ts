export type FilterState = {
  department: string | null;
  status: string | null;
  performanceScore: [number, number];
  sortBy: string | null;
};

export const DEFAULT_FILTERS: FilterState = {
  department: null,
  status: null,
  performanceScore: [0, 5],
  sortBy: null,
};
