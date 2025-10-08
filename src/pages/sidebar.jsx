import { useState } from "react";
import { Home, User, Settings, LogOut ,Menu } from "lucide-react";


import clsx from "clsx";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "tix-h-screen tix-flex tix-flex-col tix-border-r tix-border-border tix-bg-background tix-transition-all tix-duration-500",
        collapsed ? "tix-w-20" : "tix-w-64"
      )}
    >
      <div className="tix-flex tix-items-center tix-justify-between tix-px-4 tix-py-3 tix-border-b tix-border-border tix-duration-500">
        <span className={clsx("tix-font-semibold tix-text-lg tix-text-foreground", collapsed && "tix-hidden")}>
          CRM.X
        </span>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className= {` tix-p-2 tix-rounded-md tix-text-muted-foreground hover:tix-bg-muted  hover:tix-text-foreground tix-transition-colors ${ collapsed ? "" : " tix-justify-center"}`}
        >
          <Menu size={18} />
        </button>
      </div>

      <nav className="tix-flex-1 tix-p-3 tix-space-y-1">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={clsx(
              "tix-flex tix-items-center tix-gap-3 tix-w-full tix-rounded-md tix-px-3 tix-py-2 tix-text-sm tix-duration-200 tix-transition-colors hover:tix-bg-gray-200",
              active === label
                ? "tix-bg-accent tix-text-accent-foreground"
                : "tix-text-muted-foreground hover:tix-bg-muted hover:tix-text-foreground" ,
                collapsed ? "tix-justify-center" : ""

            )}
          >
            <Icon size={18} />
            {!collapsed && <span>{label}</span>}
          </button>
        ))}
      </nav>

      <div className="tix-p-3 tix-border-t tix-border-border">
        <button className="tix-flex tix-items-center tix-duration-200 tix-transition-colors hover:tix-bg-gray-200 tix-gap-3 tix-w-full tix-rounded-md tix-px-3 tix-py-2 tix-text-sm tix-text-muted-foreground hover:tix-bg-muted hover:tix-text-foreground tix-transition-colors">
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
