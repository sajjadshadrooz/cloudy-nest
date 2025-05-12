"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const checkUserAccess = async () => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) redirect("/articles");
  };

  useEffect(() => {
    checkUserAccess();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
