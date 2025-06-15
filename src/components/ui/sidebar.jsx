import { Link, useLocation } from "react-router-dom"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

// Icons (same as before)
const HomeIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const CheckIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const MessageIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const CalendarIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const SettingsIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const HeartIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const menuItems = [
  { title: "Dashboard", icon: HomeIcon, path: "/" },
  { title: "Contacts", icon: UsersIcon, path: "/contacts" },
  { title: "Follow-Ups", icon: CheckIcon, path: "/followups" },
  { title: "Messages", icon: MessageIcon, path: "/messages" },
  { title: "Calendar", icon: CalendarIcon, path: "/calendar" },
]

const adminItems = [
  { title: "Admin Panel", icon: ShieldIcon, path: "/admin" },
  { title: "Settings", icon: SettingsIcon, path: "/settings" },
]

export function Sidebar({ collapsed }) {
  const location = useLocation()

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
          <HeartIcon />
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-sidebar-foreground">Follow-Up Ministry</span>
            <span className="text-xs text-muted-foreground">Grace Community Church</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <div className="space-y-1">
          {!collapsed && <p className="text-xs font-medium text-muted-foreground mb-2">MAIN MENU</p>}
          {menuItems.map((item) => (
            <Link key={item.title} to={item.path}>
              <Button
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-3 h-9", collapsed && "justify-center px-2")}
              >
                <item.icon />
                {!collapsed && <span className="text-sm">{item.title}</span>}
              </Button>
            </Link>
          ))}
        </div>

        <div className="mt-8 space-y-1">
          {!collapsed && <p className="text-xs font-medium text-muted-foreground mb-2">ADMINISTRATION</p>}
          {adminItems.map((item) => (
            <Link key={item.title} to={item.path}>
              <Button
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-3 h-9", collapsed && "justify-center px-2")}
              >
                <item.icon />
                {!collapsed && <span className="text-sm">{item.title}</span>}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Pastor John" />
            <AvatarFallback className="bg-blue-100 text-blue-600">PJ</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-sidebar-foreground">Pastor John</p>
              <p className="text-xs text-muted-foreground">pastor@church.org</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
