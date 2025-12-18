import { Separator } from "@radix-ui/react-separator";
import { SidebarInset, SidebarTrigger } from "./ui/sidebar";
import { AppBreadcrumb } from "./app-breadcrumb";
import { Outlet } from "react-router-dom";

export default function InsetSidebar() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <AppBreadcrumb />
        </div>
      </header>
      <Outlet />
    </SidebarInset>
  );
}
