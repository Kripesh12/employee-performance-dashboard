import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  department: z.enum(["engineering", "hr", "sales", "finance"], {
    error: "Department is required",
  }),
  performanceScore: z.coerce
    .number()
    .min(0, "Score must be at least 0")
    .max(5, "Score must be at most 5")
    .transform((val): number => val),

  status: z.enum(["active", "on_leave", "resigned"], {
    error: "Status is required",
  }),
  joiningDate: z.string().min(1, "Joining date is required"),
});

export type EmployeeFormValues = z.infer<typeof employeeSchema>;
