export function EmployeeResultCount({
  total,
  from,
  to,
}: {
  shown: number;
  total: number;
  from: number;
  to: number;
}) {
  return (
    <p className="text-sm text-muted-foreground text-center">
      Showing {from}–{to} of {total} employees
    </p>
  );
}
