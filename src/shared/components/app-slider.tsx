import { Slider } from "@/shared/ui/slider";
import { Label } from "@/shared/ui/label";
import { cn } from "@/lib/utils";

interface AppSliderProps {
  label?: string;
  value?: number[];
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number[]) => void;
  className?: string;
}

export function AppSlider({
  label,
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onChange,
  className,
}: AppSliderProps) {
  return (
    <div className={cn("space-y-2 w-full max-w-xs", className)}>
      <div className="flex justify-between items-center">
        {label && <Label>{label}</Label>}
      </div>

      <Slider
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onValueChange={onChange}
      />
    </div>
  );
}
