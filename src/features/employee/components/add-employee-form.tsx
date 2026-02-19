import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaRegUser } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { GoGear } from "react-icons/go";

import {
  employeeSchema,
  type EmployeeFormValues,
} from "../schema/add-employee-schema";

import {
  useDepartmentOptions,
  useStatusOptions,
} from "../hooks/api/use-employee-options";

import { Input } from "@/shared/ui/input";
import { AppField, AppSelectField, AppButton } from "@/shared/components";
import type { Employee } from "../types";
import { toFormValue } from "@/shared/lib/utils";

interface EmployeeFormProps {
  onSubmit: (values: EmployeeFormValues) => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
  employee?: Employee | null;
}

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-primary">{icon}</span>
      <h2 className="text-sm font-semibold">{title}</h2>
    </div>
  );
}

const DEFAULT_VALUES: Partial<EmployeeFormValues> = {
  name: "",
  role: "",
  department: undefined,
  performanceScore: undefined,
  status: "active",
  joiningDate: "",
};

export function AddEmployeeForm({
  onSubmit,
  onCancel,
  isSubmitting,
  employee,
}: EmployeeFormProps) {
  const { data: departments, isLoading: loadingDepts } = useDepartmentOptions();
  const { data: statuses, isLoading: loadingStatuses } = useStatusOptions();

  const form = useForm<EmployeeFormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(employeeSchema) as any,
    defaultValues: employee
      ? {
          name: employee.name,
          role: employee.role,
          department: toFormValue(
            employee.department,
          ) as EmployeeFormValues["department"],
          status: toFormValue(employee.status) as EmployeeFormValues["status"],
          performanceScore: employee.performanceScore,
          joiningDate: employee.joiningDate,
        }
      : DEFAULT_VALUES,
  });

  return (
    <FormProvider {...form}>
      <form
        id="employee-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-4"
      >
        {/* Basic Info */}
        <section>
          <SectionHeader icon={<FaRegUser />} title="Basic Info" />
          <div className="space-y-4">
            <AppField
              name="name"
              label="Full Name"
              render={(field) => (
                <Input {...field} placeholder="e.g. Jane Doe" />
              )}
            />
            <AppField
              name="role"
              label="Role"
              render={(field) => (
                <Input {...field} placeholder="e.g. Product Designer" />
              )}
            />
            <AppSelectField
              name="department"
              label="Department"
              placeholder="Select department"
              options={departments}
              isLoading={loadingDepts}
            />
          </div>
        </section>

        {/* Performance */}
        <section>
          <SectionHeader icon={<GrDocumentPerformance />} title="Performance" />
          <AppField
            name="performanceScore"
            label="Performance Score"
            render={(field) => (
              <Input
                {...field}
                type="number"
                min={0}
                max={5}
                placeholder="Scale of 0 to 5"
              />
            )}
          />
        </section>

        {/* Status & Meta */}
        <section>
          <SectionHeader icon={<GoGear />} title="Status & Meta" />
          <div className="grid grid-cols-2 gap-4">
            <AppSelectField
              name="status"
              label="Status"
              placeholder="Select status"
              options={statuses}
              isLoading={loadingStatuses}
            />
            <AppField
              name="joiningDate"
              label="Joining Date"
              render={(field) => <Input {...field} type="date" />}
            />
          </div>
        </section>

        {/* Actions */}
        <div className="flex gap-3 justify-end">
          <AppButton type="button" variant="outline" onClick={onCancel}>
            Cancel
          </AppButton>

          <AppButton type="submit" form="employee-form" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Employee"}
          </AppButton>
        </div>
      </form>
    </FormProvider>
  );
}
