import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/shared/ui/combobox";

type ComboBoxItem = {
  label: string;
  value: string;
};

interface AppComboBoxProps {
  data: ComboBoxItem[];
  placeholder?: string;
  value: string | null;
  onChange: (val: string | null) => void;
  className?: string;
}

export function AppComboBox({
  data,
  placeholder = "Select...",
  value,
  onChange,
  className,
}: AppComboBoxProps) {
  return (
    <div className={className}>
      <Combobox items={data} value={value} onValueChange={onChange}>
        <ComboboxInput placeholder={placeholder} />
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
    </div>
  );
}
