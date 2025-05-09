import { DashboardHeader } from "@/components/dashboardHeader/dashboardHeader";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <DashboardHeader title={"Arvancloud Challenge"} />

      {children}
    </div>
  );
}
