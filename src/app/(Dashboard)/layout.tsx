import { DashboardHeader } from "@/components/dashboardHeader/dashboardHeader";
import Sidebar from "@/components/dashboardSidebar/dashboardSidebar";
import { applicationName } from "@/configs/setting";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      <DashboardHeader title={applicationName} />
      <div className="flex h-full">
        <Sidebar />
        <div className="p-6 w-full">{children}</div>
      </div>
    </div>
  );
}
