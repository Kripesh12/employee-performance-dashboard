import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export default function TopBar() {
  return (
    <div className="flex justify-between p-4">
      <h1>Employee Performance Dashboard </h1>
      <div className="flex justify-between gap-10">
        <Button>Add Employee</Button>
        <Input placeholder="search employees..." />
      </div>
    </div>
  );
}
