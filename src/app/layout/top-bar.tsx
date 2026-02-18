import { AddEmployeeButton } from "@/features/employee/components/add-employee-button";
import { BrandMark } from "@/shared/components/app-brandmark";
import { AppInput } from "@/shared/components/app-input";
import { IoIosSearch } from "react-icons/io";

interface TopBarProps {
  onSearch: (query: string) => void;
}

export default function TopBar({ onSearch }: TopBarProps) {
  return (
    <div className="flex justify-between p-4 bg-white">
      <BrandMark />
      <div className="flex items-center gap-10">
        <AddEmployeeButton />
        <AppInput
          leftIcon={<IoIosSearch />}
          placeholder="Search employees..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
