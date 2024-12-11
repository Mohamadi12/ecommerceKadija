import DashboardNavigation from "@/components/global/dashboard/DashboardNavigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 bg-white border-b">
        <DashboardNavigation />
      </header>
    </div>
  );
};

export default DashboardLayout;
