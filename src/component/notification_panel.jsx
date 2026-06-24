import { X } from "lucide-react";

export default function NotificationsPanel({ onClose, notifications }) {
  return (
    <div className="absolute md:right-10 md:top-26 top-16 z-10 ">
      <div className="w-[380px] h-[350px] overflow-scroll rounded-xl border border-gray-100 bg-white shadow-xl ">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sticky top-0 z-10 bg-white">
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
