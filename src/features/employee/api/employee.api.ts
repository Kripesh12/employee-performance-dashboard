import type { Employee } from "../types";
import { MOCK_EMPLOYEES } from "../mocks";
import { DEPARTMENT_OPTIONS, SORT_OPTIONS, STATUS_OPTIONS } from "../constants";

import type { ComboBoxItem } from "@/shared/components";

const STORAGE_KEY = "employees";

function delay(time: number) {
  return new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
}

export async function fetchEmployees(): Promise<Employee[]> {
  await delay(800);
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : MOCK_EMPLOYEES;
}

export async function saveEmployee(employee: Employee): Promise<Employee> {
  await delay(500);
  const stored = localStorage.getItem(STORAGE_KEY);
  const current: Employee[] = stored ? JSON.parse(stored) : MOCK_EMPLOYEES;

  const updated = [...current, employee];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return employee;
}

export async function updateEmployee(employee: Employee): Promise<Employee> {
  await delay(300);
  const stored = localStorage.getItem(STORAGE_KEY);
  const current: Employee[] = stored ? JSON.parse(stored) : MOCK_EMPLOYEES;

  const updated = current.map((e) => (e.id === employee.id ? employee : e));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return employee;
}

export async function fetchDepartmentOptions(): Promise<ComboBoxItem[]> {
  await delay(300);
  return DEPARTMENT_OPTIONS;
}

export async function fetchStatusOptions(): Promise<ComboBoxItem[]> {
  await delay(300);
  return STATUS_OPTIONS;
}

export async function fetchSortOptions(): Promise<ComboBoxItem[]> {
  await delay(300);
  return SORT_OPTIONS;
}
