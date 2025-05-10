import { DashboardHeader } from "@/components/dashboardHeader/dashboardHeader";
import Sidebar from "@/components/dashboardSidebar/dashboardSidebar";
import { applicationName } from "@/configs/setting";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <DashboardHeader title={applicationName} />
      <Sidebar />
      {children}
    </div>
  );
}
