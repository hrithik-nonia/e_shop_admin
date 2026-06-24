import { X } from "lucide-react";

export default function ProfileSettingsModal({ onClose }) {
  return (
    <div className=" absolute z-10 md:right-[25%] md:top-25 ">
      <div className="w-full max-w-2xl overflow-hidden rounded-lg bg-[#f4f1ea] shadow-2xl ">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#0f1729] px-6 py-4">
          <h2 className="text-lg font-semibold text-white">Profile Settings</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-gray-300 transition-colors hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-[180px_1fr] grid-cols-[100px_1fr] gap-6 px-6 py-6">
          {/* Left: Photo */}
          <div className="flex flex-col items-center">
            <div className="md:h-36 md:w-36 overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
                alt="Sarah Jenkins profile"
                className="h-full w-full object-cover"
              />
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-md border border-gray-300 bg-white py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
            >
              Change Photo
            </button>
          </div>

          {/* Right: Form */}
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Sarah Jenkins"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="sarah.jenkins@eshop.com"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Senior Admin</option>
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Security */}
            <div className="pt-2">
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                Security
              </h3>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Change Password
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="mt-1.5 text-xs text-gray-500">
                Last password change: 30 days ago.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-gray-200 bg-[#f4f1ea] px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-md bg-[#0f1729] px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1a2540]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
