// import { Outlet } from "react-router-dom";

import { AppSidebar } from "@/components/app-sidebar";
import InsetSidebar from "@/components/inset-sidebar";

export default function MainLayout() {
  return (
    <main className="w-screen h-screen border border-red-500">
      <div className="w-full h-full flex">
        <AppSidebar />
        <InsetSidebar />
      </div>
    </main>
  );
}
