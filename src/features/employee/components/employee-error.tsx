import { AlertTriangle, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/shared/ui/card";
import { AppButton } from "@/shared/components";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  className?: string;
}

export function EmployeeErrorState({
  title = "Something went wrong",
  description = "We couldn’t load the data. Please try again.",
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={`flex items-center justify-center py-16 ${className ?? ""}`}
    >
      <Card className="w-full max-w-lg ">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-7 w-7 text-destructive" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-destructive">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          {onRetry && (
            <AppButton
              leftIcon={<RefreshCw />}
              onClick={onRetry}
              className="w-full"
            >
              Retry
            </AppButton>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
