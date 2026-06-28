import { useState } from "react";
import {
  ChevronDown,
  Filter,
  FileText,
  SquarePen,
  Headset,
} from "lucide-react";

// ---- Sample data — replace with your API response ----------------------

const ORDERS = [
  {
    id: "4501",
    date: "28-06-2026",
    customer: "John Smith",
    items: 3,
    total: 45.0,
    status: "Pending",
  },
  {
    id: "4502",
    date: "27-06-2026",
    customer: "Sara Lee",
    items: 1,
    total: 899.0,
    status: "Processing",
  },
  {
    id: "4503",
    date: "27-06-2026",
    customer: "Starin Smith",
    items: 5,
    total: 1250.0,
    status: "Delivered",
  },
  {
    id: "4504",
    date: "26-06-2026",
    customer: "Mark Smith",
    items: 2,
    total: 120.0,
    status: "Cancelled",
  },
  {
    id: "4505",
    date: "26-06-2026",
    customer: "Auren Smith",
    items: 2,
    total: 789.0,
    status: "Delivered",
  },
  {
    id: "4506",
    date: "26-06-2026",
    customer: "Auren Smith",
    items: 2,
    total: 1250.0,
    status: "Delivered",
  },
  {
    id: "4507",
    date: "27-06-2026",
    customer: "Starin Smith",
    items: 1,
    total: 199.0,
    status: "Delivered",
  },
  {
    id: "4508",
    date: "26-06-2026",
    customer: "Mark Smith",
    items: 2,
    total: 120.0,
    status: "Cancelled",
  },
];

const TOTAL_ORDERS = 1500;

const STATUS_STYLES = {
  Pending: "bg-amber-100 text-amber-700",
  Processing: "bg-blue-100 text-blue-600",
  Delivered: "bg-green-600 text-white",
  Cancelled: "bg-red-600 text-white",
};

const ALL_STATUSES = ["Pending", "Processing", "Delivered", "Cancelled"];

// ---- Status badge ------------------------------------------------------

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}

// ---- Status filter dropdown ---------------------------------------------

function StatusFilterDropdown({ selected, onToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-300 bg-blue-50/50 text-sm text-gray-700 min-w-[280px]"
      >
        <span className="text-xs text-gray-500 shrink-0">Filter by Status</span>
        <span className="flex items-center gap-1.5 flex-wrap text-xs">
          {ALL_STATUSES.map((status) => (
            <span
              key={status}
              className="flex items-center gap-1 text-gray-600"
            >
              [{selected.includes(status) ? "x" : " "}] {status}
            </span>
          ))}
        </span>
        <ChevronDown className="h-4 w-4 ml-auto shrink-0" />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-1">
          {ALL_STATUSES.map((status) => (
            <label
              key={status}
              className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(status)}
                onChange={() => onToggle(status)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-400"
              />
              {status}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- Action buttons -----------------------------------------------------

function ActionButtons({ onViewDetails, onReview, onSupport }) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={onViewDetails}
        className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 whitespace-nowrap"
      >
        <FileText className="h-3.5 w-3.5" />
        View Details
      </button>
      <button
        onClick={onReview}
        className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 whitespace-nowrap"
      >
        <SquarePen className="h-3.5 w-3.5" />
        Review
      </button>
      <button
        onClick={onSupport}
        className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 whitespace-nowrap"
      >
        <Headset className="h-3.5 w-3.5" />
        Customer Support
      </button>
    </div>
  );
}

// ---- Main component --------------------------------------------------------

export default function AllOrdersManagement() {
  const [orders] = useState(ORDERS);
  const [statusFilter, setStatusFilter] = useState([
    "Pending",
    "Processing",
    "Cancelled",
  ]);

  const toggleStatus = (status) =>
    setStatusFilter((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status],
    );

  const filtered = orders.filter((o) => statusFilter.includes(o.status));

  return (
    <div className="bg-gray-50 p-6 rounded-2xl">
      {/* Page header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gray-900">
          All Orders Management ({TOTAL_ORDERS.toLocaleString()})
        </h1>
        <button className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
          All Time
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 gap-4">
          <p className="text-sm text-gray-600 whitespace-nowrap">
            Displaying All Orders ({TOTAL_ORDERS.toLocaleString()} total)
          </p>
          <div className="flex items-center gap-2">
            <StatusFilterDropdown
              selected={statusFilter}
              onToggle={toggleStatus}
            />
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 whitespace-nowrap">
              <Filter className="h-3.5 w-3.5" />
              Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-t border-gray-100 text-left text-gray-500">
                <th className="px-5 py-3 font-medium">Order ID</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Customer Name</th>
                <th className="px-5 py-3 font-medium">Total Items</th>
                <th className="px-5 py-3 font-medium">Order Total</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-5 py-2.5 text-gray-700 font-medium">
                    #{order.id}
                  </td>
                  <td className="px-5 py-2.5 text-gray-600 whitespace-nowrap">
                    {order.date}
                  </td>
                  <td className="px-5 py-2.5 text-gray-700">
                    {order.customer}
                  </td>
                  <td className="px-5 py-2.5 text-gray-700">{order.items}</td>
                  <td className="px-5 py-2.5 text-gray-700 font-medium">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-5 py-2.5">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-5 py-2.5">
                    <ActionButtons
                      onViewDetails={() => console.log("view", order.id)}
                      onReview={() => console.log("review", order.id)}
                      onSupport={() => console.log("support", order.id)}
                    />
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-8 text-center text-gray-400"
                  >
                    No orders match the selected filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination info */}
        <p className="px-5 pt-4 text-sm text-gray-500">
          Showing 1 to {filtered.length} of {TOTAL_ORDERS.toLocaleString()}
        </p>

        {/* Footer note */}
        <p className="px-5 py-4 text-sm text-gray-500 border-t border-gray-100 mt-1">
          Order statuses are subject to change. Click View Details for
          comprehensive information. List updated at{" "}
          {new Date().toLocaleTimeString()}.
        </p>
      </div>
    </div>
  );
}
