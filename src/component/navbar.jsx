import {
  Search,
  Bell,
  ChevronDown,
  Menu,
  Home,
  Archive,
  FileText,
  Settings,
  User,
} from "lucide-react";

import NotificationsPanel from "./notification_panel";
import { useState } from "react";

export default function Navbar() {
  // state for NotificationsPanel show
  const [showNotificationsPanel, setShowNotificationsPanel] = useState(false);
  return (
    <>
      <div className=" w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between relative">
        {/* Mobile Hamburger */}
        <button className="lg:hidden">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Breadcrumb */}
        <nav className="lg:flex items-center gap-2 text-sm hidden">
          <span className="text-gray-400">Dashboard</span>
          <span className="text-gray-300">›</span>
          <span className="text-gray-400">Products</span>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-medium">All Products</span>
        </nav>

        {/* Right side: search, notifications, profile */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="relative hidden lg:flex">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-56 pl-9 pr-3 py-2 rounded-md bg-gray-100 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Notification bell */}
          <button
            className="relative text-gray-500 hover:text-gray-700"
            onClick={() => setShowNotificationsPanel(true)}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] leading-none font-medium rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile */}
          <div className="lg:flex items-center gap-2 cursor-pointer hidden">
            <img
              src="https://i.pravatar.cc/40?img=47"
              alt="Sarah Jenkins"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-800">
              Sarah Jenkins
            </span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>

          {/* profile on mobile */}
          <img
            src="https://i.pravatar.cc/40?img=47"
            alt="Sarah Jenkins"
            className="w-8 h-8 rounded-full object-cover md:hidden"
          />
        </div>
      </div>

      {/* bottom navbar for mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-6 py-2 flex items-center justify-between md:hidden z-50">
        {/* Home */}
        <button className="flex flex-col items-center gap-1 text-gray-900">
          <Home className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-xs font-medium">Home</span>
        </button>

        {/* Inventory with dropdown */}
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
          <div className="flex items-center gap-0.5">
            <Archive className="w-5 h-5" strokeWidth={1.8} />
            <ChevronDown className="w-3 h-3" strokeWidth={2} />
          </div>
          <span className="text-xs">Inventory</span>
        </button>

        {/* Orders */}
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
          <FileText className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-xs">Orders</span>
        </button>

        {/* Settings */}
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
          <Settings className="w-5 h-5" strokeWidth={1.8} />
          <span className="text-xs">Settings</span>
        </button>

        {/* Profile icon */}
        <button className="text-gray-400 hover:text-gray-600">
          <User className="w-6 h-6" strokeWidth={1.8} />
          <span className="text-xs">Profile</span>
        </button>
      </div>

      {/* show NotificationsPanel */}
      {showNotificationsPanel && (
        <NotificationsPanel onClose={() => setShowNotificationsPanel(false)} />
      )}
    </>
  );
}
