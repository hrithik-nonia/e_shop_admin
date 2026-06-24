import { ShoppingCart, User, TrendingDown, X } from "lucide-react";

// temp notification
const notifications = [
  {
    id: 1,
    icon: ShoppingCart,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    title: "NEW ORDER",
    time: "5m ago",
    body: (
      <>
        Order #12345 from John Doe (₹5,600).{" "}
        <a href="#" className="text-blue-600 hover:underline">
          View Details.
        </a>
      </>
    ),
  },
  {
    id: 2,
    icon: User,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    title: "PRODUCT UPDATED",
    time: "1h ago",
    body: "A new admin (Michael Brown) updated 'iPhone 13' stock levels.",
  },
  {
    id: 3,
    icon: TrendingDown,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "LOW STOCK ALERT",
    time: "2h ago",
    body: "iPhone 13 Mafk (SKU A-103) is at critical level (2 units). Restock recommended.",
  },
  {
    id: 3,
    icon: TrendingDown,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "LOW STOCK ALERT",
    time: "2h ago",
    body: "iPhone 13 Mafk (SKU A-103) is at critical level (2 units). Restock recommended.",
  },
  {
    id: 3,
    icon: TrendingDown,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "LOW STOCK ALERT",
    time: "2h ago",
    body: "iPhone 13 Mafk (SKU A-103) is at critical level (2 units). Restock recommended.",
  },
  {
    id: 3,
    icon: TrendingDown,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "LOW STOCK ALERT",
    time: "2h ago",
    body: "iPhone 13 Mafk (SKU A-103) is at critical level (2 units). Restock recommended.",
  },
  {
    id: 3,
    icon: TrendingDown,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "LOW STOCK ALERT",
    time: "2h ago",
    body: "iPhone 13 Mafk (SKU A-103) is at critical level (2 units). Restock recommended.",
  },
  {
    id: 3,
    icon: TrendingDown,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "LOW STOCK ALERT",
    time: "2h ago",
    body: "iPhone 13 Mafk (SKU A-103) is at critical level (2 units). Restock recommended.",
  },
];

export default function NotificationsPanel({ onClose }) {
  return (
    <div className="flex min-h-screen items-start justify-center pt-16 absolute right-10 top-10 z-10">
      <div className="w-[380px] h-[350px] overflow-scroll rounded-xl border border-gray-100 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h2 className="text-sm font-bold tracking-wide text-gray-900">
            NOTIFICATIONS
          </h2>
          <button
            type="button"
            aria-label="Close notifications"
            className="text-gray-400 transition-colors hover:text-gray-600"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-100">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div key={n.id} className="flex gap-3 px-5 py-4">
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${n.iconBg}`}
                >
                  <Icon size={16} className={n.iconColor} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-[13px] font-bold tracking-wide text-gray-900">
                      {n.title}
                    </p>
                    <span className="flex-shrink-0 text-xs text-gray-400">
                      {n.time}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-snug text-gray-500">
                    {n.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
