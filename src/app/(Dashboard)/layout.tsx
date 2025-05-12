"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

import { DashboardHeader } from "@/components/dashboardHeader/dashboardHeader";
import Sidebar from "@/components/dashboardSidebar/dashboardSidebar";
import { applicationName } from "@/configs/setting";
import { ProfileContext } from "@/contexts/profileContext";
import { useUserAPI } from "@/services/hooks/auth/currentUser";
import LoadingPage from "@/components/loadingPage/loadingPage";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { me } = useUserAPI();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  const checkUserAccess = async () => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) redirect("/login");

    const user = await me();
    setProfile(user);

    setLoading(false);
  };

  useEffect(() => {
    checkUserAccess();
  }, []);

  return loading ? (
    <LoadingPage />
  ) : (
    <ProfileContext.Provider value={{ profile }}>
      <div className="w-full h-full">
        <DashboardHeader title={applicationName} />
        <div className="flex h-full">
          <Sidebar />
          <div className="p-6 w-full">{children}</div>
        </div>
      </div>
    </ProfileContext.Provider>
  );
}
