import { Search, Bell, ChevronDown, Menu } from "lucide-react";
export default function Navbar() {
  return (
    <>
      <div className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
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
          <button className="relative text-gray-500 hover:text-gray-700">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] leading-none font-medium rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer">
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
        </div>
      </div>
    </>
  );
}
