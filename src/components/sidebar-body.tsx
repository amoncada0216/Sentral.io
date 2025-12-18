import * as React from "react";
import { SidebarFooterMenu } from "@/components/sidebar-footer-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Command,
  LayoutDashboard,
  ChartScatter,
  ScrollText,
  Users,
  UserCog,
  Inbox,
  SquareCheckBig,
  Bell,
  Calendar,
} from "lucide-react";

const workspaceItems = [
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Tasks",
    url: "#",
    icon: SquareCheckBig,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
];

const operationsItems = [
  {
    title: "Overview",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartScatter,
  },
  {
    title: "Reports",
    url: "#",
    icon: ScrollText,
  },
  {
    title: "Users & Teams",
    url: "#",
    icon: Users,
  },
  {
    title: "Organization Settings",
    url: "#",
    icon: UserCog,
  },
];

export function SidebarBody({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      variant="inset"
      {...props}
    >
      {/* SIDEBAR HEADER */}
      {/* SIDEBAR CONTENT */}
      <SidebarContent className="overflow-hidden">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                asChild
              >
                <a href="#">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Sentral.io</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />

        {/* WORKSPACE */}
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {workspaceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />

        {/* OPERATIONS */}
        <SidebarGroup>
          <SidebarGroupLabel>Operations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {operationsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* SIDEBAR FOOTER */}
      <SidebarFooter>
        <SidebarFooterMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
