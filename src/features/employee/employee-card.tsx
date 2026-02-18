import AppAvatar from "@/shared/components/app-avatar";
import { Card } from "@/shared/ui/card";

export default function EmployeeCard() {
  return (
    <Card>
      <div className="flex justify-between">
        <AppAvatar />
        <p>Exceeding</p>
      </div>

      <div>
        <p>Sarah Jenkins</p>
        <p>Lead Developer</p>
        <p>Engineering</p>
      </div>

      <div className="flex justify-between">
        <p>Performance Score</p>
        <p>95/100</p>
      </div>

      <div>stars</div>
    </Card>
  );
}
