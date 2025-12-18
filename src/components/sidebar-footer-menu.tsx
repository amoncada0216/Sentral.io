import {
  SidebarMenu,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  ChevronUp,
  LogOut,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import user from "@/user";
import { useTheme } from "./providers/ThemeProvider";

export function SidebarFooterMenu() {
  const { isMobile } = useSidebar();

  const { theme, setTheme } = useTheme();

  return (
    <SidebarMenu className="">
      <DropdownMenu>
        {/* DROPDOWN MENU TRIGGER */}
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent border data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar className="h-9 w-9 rounded-full overflow-hidden">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">
                {user.name} {user.lastName[0]}.
              </span>
              <span className="truncate text-xs">{user.position}</span>
            </div>
            <ChevronUp className="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        {/* DROPDOWN MENU CONTENT */}
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          side={isMobile ? "bottom" : "right"}
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center justify-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {user.name} {user.lastName[0]}.
                </span>
                <span className="truncate text-xs">Edit profile</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Sparkles />
              Upgrade to Pro
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="cursor-pointer gap-2"
            >
              {theme === "light" ? <Sun /> : <Moon />}
              Theme
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenu>
  );
}
