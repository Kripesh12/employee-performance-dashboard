import type { ReactNode } from "react";
import TopBar from "./top-bar";
import Footer from "./footer";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 flex flex-col">
      <TopBar />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
      <Footer />
    </div>
  );
}
