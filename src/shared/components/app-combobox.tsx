import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/shared/ui/combobox";
import { Label } from "../ui/label";
import { cn } from "@/shared/lib/utils";

export type ComboBoxItem = {
  label: string;
  value: string;
};

interface AppComboBoxProps {
  data: ComboBoxItem[];
  label?: string;
  placeholder?: string;
  value: string | null;
  onChange: (val: string | null) => void;
  error?: string;
  isLoading?: boolean;
  className?: string;
}

export function AppComboBox({
  data,
  label,
  placeholder = "Select...",
  value,
  onChange,
  error,
  isLoading = false,
  className,
}: AppComboBoxProps) {
  const id = label?.toLowerCase().replace(/\s+/g, "-");
  const selectedLabel = data.find((item) => item.value === value)?.label ?? "";

  function handleChange(val: string | null) {
    onChange(val || null);
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label htmlFor={id}>{label}</Label>}

      <Combobox items={data} value={value} onValueChange={handleChange}>
        <ComboboxInput
          id={id}
          placeholder={placeholder}
          className={"rounded-2xl"}
          value={selectedLabel}
          disabled={isLoading}
        />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item.value}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
