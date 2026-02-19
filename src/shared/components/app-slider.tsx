import { Slider } from "@/shared/ui/slider";
import { Label } from "@/shared/ui/label";
import { cn } from "@/shared/lib/utils";

interface AppSliderProps {
  label?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  className?: string;
}

export function AppSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onChange,
  className,
}: AppSliderProps) {
  return (
    <div className={cn("space-y-2 w-full ", className)}>
      {label && (
        <div className="flex justify-between items-center">
          <Label>{label}</Label>
          <span className="text-lg font-bold text-primary">{value ?? min}</span>
        </div>
      )}

      <Slider
        value={value !== undefined ? [value] : undefined}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onValueChange={([val]) => onChange?.(val)}
      />
    </div>
  );
}
