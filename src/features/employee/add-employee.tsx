import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/shared/ui/sheet";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";

type AddEmployeeDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AddEmployeeDrawer({
  open,
  onOpenChange,
}: AddEmployeeDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-100 sm:w-125">
        <SheetHeader>
          <SheetTitle>Add New Employee</SheetTitle>
          <SheetDescription>Enter employee details below.</SheetDescription>
        </SheetHeader>

        <div className="space-y-4 py-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Input id="department" placeholder="Engineering" />
          </div>
        </div>

        <SheetFooter className="gap-2">
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>

          <Button>Save Employee</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
