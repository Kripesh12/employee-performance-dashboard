import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateId(): string {
  return `emp-${Date.now()}`;
}

export function toFormValue(value: string): string {
  return value.toLowerCase().replace(/\s+/g, "_");
}
