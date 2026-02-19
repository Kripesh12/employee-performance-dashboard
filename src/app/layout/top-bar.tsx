import { AddEmployeeButton } from "@/features/employee/components/add-employee-button";
import { useFilterActions } from "@/features/employee/store/employee-filter-store";
import { BrandMark } from "@/shared/components/app-brandmark";
import { AppInput } from "@/shared/components/app-input";
import { IoIosSearch } from "react-icons/io";

export default function TopBar() {
  const { setSearch } = useFilterActions();
  return (
    <div className="flex justify-between p-4 bg-white">
      <BrandMark />
      <div className="flex items-center gap-10">
        <AddEmployeeButton />
        <AppInput
          leftIcon={<IoIosSearch />}
          placeholder="Search employees..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
