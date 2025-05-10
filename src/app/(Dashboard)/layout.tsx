import { DashboardHeader } from "@/components/dashboardHeader/dashboardHeader";
import Sidebar from "@/components/dashboardSidebar/dashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <DashboardHeader title={"Arvancloud Challenge"} />
      <Sidebar />
      {children}
    </div>
  );
}
