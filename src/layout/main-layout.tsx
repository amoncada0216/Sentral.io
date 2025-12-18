

import { SidebarBody } from "@/components/sidebar-body";
import InsetSidebar from "@/components/inset-sidebar";

export default function MainLayout() {
  return (
    <main className="w-screen h-screen border border-red-500">
      <div className="w-full h-full flex">
        <SidebarBody />
        <InsetSidebar />
      </div>
    </main>
  );
}
