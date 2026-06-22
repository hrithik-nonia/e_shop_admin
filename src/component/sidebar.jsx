import { useState } from "react";
import {
  Store,
  LayoutGrid,
  Package,
  ShoppingCart,
  LayoutList,
  Image,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

export default function Sidebar() {
  const [productsOpen, setProductsOpen] = useState(true);
  const [ordersOpen, setOrdersOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("All Products");

  const productLinks = ["All Products", "Add Product", "Edit Product"];
  const orderLinks = [
    "All Orders",
    "Pending",
    "Processing",
    "Delivered",
    "Cancelled",
  ];

  return (
    <div className="flex-1 min-h-screen bg-[#171a21] text-gray-300 flex flex-col py-5">
      {/* Logo / brand */}
      <div className="flex items-center gap-2 px-5 pb-5">
        <div className="bg-blue-500 rounded-md p-1.5">
          <Store className="w-4 h-4 text-white" strokeWidth={2} />
        </div>
        <span className="text-white font-semibold text-sm tracking-wide">
          E-SHOP ADMIN
        </span>
      </div>

      <nav className="flex-1 px-3 space-y-1 text-sm">
        {/* Dashboard */}
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-200 hover:bg-white/5">
          <LayoutGrid className="w-4 h-4" strokeWidth={1.8} />
          <span>Dashboard</span>
        </button>

        {/* Products */}
        <button
          onClick={() => setProductsOpen(!productsOpen)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-200 hover:bg-white/5"
        >
          <Package className="w-4 h-4" strokeWidth={1.8} />
          <span className="flex-1 text-left">Products</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${
              productsOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {productsOpen && (
          <div className="ml-4 border-l border-white/10 pl-4 space-y-0.5">
            {productLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveItem(link)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                  activeItem === link
                    ? "bg-blue-500/15 text-blue-400 border-l-2 border-blue-500 -ml-[2px] pl-[14px]"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}

        {/* Orders */}
        <button
          onClick={() => setOrdersOpen(!ordersOpen)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-200 hover:bg-white/5"
        >
          <ShoppingCart className="w-4 h-4" strokeWidth={1.8} />
          <span className="flex-1 text-left">Orders</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${
              ordersOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {ordersOpen && (
          <div className="ml-4 border-l border-white/10 pl-4 space-y-0.5">
            {orderLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveItem(link)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                  activeItem === link
                    ? "bg-blue-500/15 text-blue-400 border-l-2 border-blue-500 -ml-[2px] pl-[14px]"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}

        {/* Categories */}
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-200 hover:bg-white/5">
          <LayoutList className="w-4 h-4" strokeWidth={1.8} />
          <span>Categories</span>
        </button>

        {/* Banner Management */}
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-200 hover:bg-white/5">
          <Image className="w-4 h-4" strokeWidth={1.8} />
          <span>Banner Management</span>
        </button>

        {/* Store Settings */}
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-200 hover:bg-white/5">
          <Settings className="w-4 h-4" strokeWidth={1.8} />
          <span>Store Settings</span>
        </button>
      </nav>

      {/* Logout */}
      <div className="px-3 pt-2 border-t border-white/10">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-red-500 hover:bg-red-500/10">
          <LogOut className="w-4 h-4" strokeWidth={1.8} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
