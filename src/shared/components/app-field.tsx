import {
  Controller,
  useFormContext,
  type ControllerRenderProps,
} from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/shared/ui/";

interface AppFieldProps {
  name: string;
  label: string;
  render: (field: ControllerRenderProps) => React.ReactNode;
}

export function AppField({ name, label, render }: AppFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>
          {render(field)}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
