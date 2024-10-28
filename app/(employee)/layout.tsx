import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { adminSidebarConfig } from "@/config/sidebar";
import { getCurrentUser } from "@/lib/sessions";
import React from "react";

type AdminLayoutProps = {
  children?: React.ReactNode;
};

const AdminLayout = async ({ children }: AdminLayoutProps) => {
  const user = await getCurrentUser();

  //   if (!user) {
  //     redirect(authOptions?.pages?.signIn || "/admin/sign-in");
  //   }

  const getSidebarConfig = () => {
    if (!user) return [];

    switch (user.role) {
      case "admin":
        return adminSidebarConfig;
      default:
        return [];
    }
  };

  console.log("user", user);

  return (
    <main className="relative flex h-full max-h-screen min-h-screen flex-col overflow-hidden bg-[#FAFAFA]">
      <Navbar />
      <main className="flex w-full flex-1 overflow-hidden">
        <Sidebar items={getSidebarConfig()} />
        {children}
      </main>
    </main>
  );
};

export default AdminLayout;
