import type { ComboBoxItem } from "@/shared/components/app-combobox";

export const DEPARTMENT_OPTIONS: ComboBoxItem[] = [
  { label: "Engineering", value: "engineering" },
  { label: "HR", value: "hr" },
  { label: "Sales", value: "sales" },
  { label: "Finance", value: "finance" },
  { label: "All Department", value: "" },
];

export const STATUS_OPTIONS: ComboBoxItem[] = [
  { label: "All Statuses", value: "" },
  { label: "Active", value: "active" },
  { label: "On Leave", value: "on_leave" },
  { label: "Resigned", value: "resigned" },
];

export const SORT_OPTIONS: ComboBoxItem[] = [
  { label: "Name (A–Z)", value: "name_asc" },
  { label: "Name (Z–A)", value: "name_desc" },
  { label: "Performance (High)", value: "performance_desc" },
  { label: "Performance (Low)", value: "performance_asc" },
  { label: "Joining Date", value: "joining_date" },
];
