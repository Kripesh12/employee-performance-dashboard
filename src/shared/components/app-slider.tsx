import { Slider } from "@/shared/ui/slider";
import { cn } from "@/lib/utils";

interface AppSliderProps {
  value?: number[] | undefined;
  defaultValue?: number[] | undefined;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onValueChange?: (value: number | number[]) => void;
  className?: string;
}

export function AppSlider({
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onValueChange,
  className,
}: AppSliderProps) {
  return (
    <Slider
      value={value}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      onValueChange={onValueChange}
      className={cn("mx-auto w-full max-w-xs", className)}
    />
  );
}
