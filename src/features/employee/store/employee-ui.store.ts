import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

import type { Employee } from "../types";

type UIState = {
  isAddDrawerOpen: boolean;
  isEditDrawerOpen: boolean;
  editingEmployee: Employee | null;
};

type UIActions = {
  openAddDrawer: () => void;
  closeAddDrawer: () => void;
  openEditDrawer: (e: Employee) => void;
  closeEditDrawer: () => void;
};

export const useEmployeeUIStore = create<UIState & UIActions>((set) => ({
  isAddDrawerOpen: false,
  isEditDrawerOpen: false,
  editingEmployee: null,

  openAddDrawer: () => set({ isAddDrawerOpen: true }),
  closeAddDrawer: () => set({ isAddDrawerOpen: false }),
  openEditDrawer: (employee: Employee) =>
    set({ isEditDrawerOpen: true, editingEmployee: employee }),
  closeEditDrawer: () =>
    set({ isEditDrawerOpen: false, editingEmployee: null }),
}));

//selectors for performance optimazition
export const useIsAddDrawerOpen = () =>
  useEmployeeUIStore((s) => s.isAddDrawerOpen);
export const useIsEditDrawerOpen = () =>
  useEmployeeUIStore((s) => s.isEditDrawerOpen);
export const useEditingEmployee = () =>
  useEmployeeUIStore((s) => s.editingEmployee);

//useShallow compares the property one by one insted of comparing previous object by refrence
export const useUIActions = () =>
  useEmployeeUIStore(
    useShallow((s) => ({
      openAddDrawer: s.openAddDrawer,
      closeAddDrawer: s.closeAddDrawer,
      openEditDrawer: s.openEditDrawer,
      closeEditDrawer: s.closeEditDrawer,
    })),
  );
