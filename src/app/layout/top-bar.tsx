import { useFilterActions } from "@/features/employee/store/employee-filter.store";
import { useUIActions } from "@/features/employee/store/employee-ui.store";
import { AppAvatar, AppButton } from "@/shared/components";
import { BrandMark } from "@/shared/components/app-brandmark";
import { AppInput } from "@/shared/components/app-input";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { FaPlus } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function MobileMenu() {
  const { setSearch } = useFilterActions();
  const { openAddDrawer } = useUIActions();

  return (
    <div className="flex flex-col gap-6 p-4 pt-12">
      <AppInput
        leftIcon={<IoIosSearch />}
        placeholder="Search employees..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <AppButton
        onClick={openAddDrawer}
        leftIcon={<FaPlus />}
        className="w-full"
      >
        Add Employee
      </AppButton>

      <div className="flex items-center gap-4 border-t pt-4">
        <div className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg">
          <IoNotificationsOutline size={22} color="#64748B" />
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg">
          <GoGear size={22} color="#64748B" />
        </div>
        <AppAvatar size="md" src="/avatar.webp" />
      </div>
    </div>
  );
}

export default function TopBar() {
  const { setSearch } = useFilterActions();
  const { openAddDrawer } = useUIActions();

  return (
    <div className="flex justify-between items-center p-4 bg-white gap-4">
      <BrandMark />

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <AppInput
          leftIcon={<IoIosSearch />}
          placeholder="Search employees..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <AppButton onClick={openAddDrawer} leftIcon={<FaPlus />}>
          Add Employee
        </AppButton>
        <div className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg">
          <IoNotificationsOutline size={25} color="#64748B" />
        </div>
        <div className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg">
          <GoGear size={25} color="#64748B" />
        </div>
        <AppAvatar size="md" src="/avatar.webp" />
      </div>

      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg">
              <RxHamburgerMenu size={22} color="#64748B" />
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="rounded-b-2xl">
            <MobileMenu />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
