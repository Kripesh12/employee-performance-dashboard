import type { Employee } from "../types";
import { MOCK_EMPLOYEES } from "../mocks/employees";
import { DEPARTMENT_OPTIONS, STATUS_OPTIONS } from "../constants";

import type { ComboBoxItem } from "@/shared/components";

function delay(time: number) {
  return new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
}

export async function fetchEmployees(): Promise<Employee[]> {
  await delay(800);
  return MOCK_EMPLOYEES;
}

export async function fetchDepartmentOptions(): Promise<ComboBoxItem[]> {
  await delay(500);
  return DEPARTMENT_OPTIONS;
}

export async function fetchStatusOptions(): Promise<ComboBoxItem[]> {
  await delay(500);
  return STATUS_OPTIONS;
}
