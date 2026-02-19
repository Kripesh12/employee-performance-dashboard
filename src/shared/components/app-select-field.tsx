import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { AppField } from "./app-field";

interface AppSelectFieldProps {
  name: string;
  label: string;
  placeholder: string;
  options: { label: string; value: string }[] | undefined;
  isLoading?: boolean;
}

export function AppSelectField({
  name,
  label,
  placeholder,
  options,
  isLoading,
}: AppSelectFieldProps) {
  return (
    <AppField
      name={name}
      label={label}
      render={(field) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger disabled={isLoading}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options
              ?.filter((opt) => opt.value !== "")
              .map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}
