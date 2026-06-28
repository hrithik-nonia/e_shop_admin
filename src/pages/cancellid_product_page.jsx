import { useState } from "react";
import { ChevronDown, Search, Mail } from "lucide-react";

// ---- Sample data — replace with your API response ----------------------

const CANCELLED_ITEMS = [
  {
    orderId: "4501",
    productId: "2201",
    date: "28-06-2026",
    image: "https://placehold.co/64x64/64748b/ffffff?text=Shoe",
    name: "Nike Air Max",
    sku: "SK-001",
    customer: "John Smith",
    amount: 120.0,
    reason: "Out of Stock",
  },
  {
    orderId: "4502",
    productId: "2202",
    date: "27-06-2026",
    image: "https://placehold.co/64x64/7c3aed/ffffff?text=iPh",
    name: "iPhone 13",
    sku: "SK-002",
    customer: "Sara Lee",
    amount: 899.0,
    reason: "Mind Change",
  },
  {
    orderId: "4503",
    productId: "2203",
    date: "27-06-2026",
    image: "https://placehold.co/64x64/1e293b/ffffff?text=Cam",
    name: "Sony A7IV",
    sku: "SK-003",
    customer: "Starin Smith",
    amount: 2450.0,
    reason: "Price Error",
  },
  {
    orderId: "4504",
    productId: "2204",
    date: "26-06-2026",
    image: "https://placehold.co/64x64/334155/ffffff?text=HP",
    name: "Bose QC45",
    sku: "SK-004",
    customer: "Mark Smith",
    amount: 320.0,
    reason: "Mind Change",
  },
  {
    orderId: "4505",
    productId: "2205",
    date: "26-06-2026",
    image: "https://placehold.co/64x64/334155/ffffff?text=HP",
    name: "Bose QC45",
    sku: "SK-005",
    customer: "Mark Smith",
    amount: 320.0,
    reason: "Delivery Delay",
  },
  {
    orderId: "4506",
    productId: "2206",
    date: "27-06-2026",
    image: "https://placehold.co/64x64/7c3aed/ffffff?text=iPh",
    name: "iPhone 13 Max",
    sku: "SK-006",
    customer: "Mark Smith",
    amount: 899.0,
    reason: "Product Not as Expected",
  },
  {
    orderId: "4507",
    productId: "2202",
    date: "27-06-2026",
    image: "https://placehold.co/64x64/1e293b/ffffff?text=Cam",
    name: "Sony A7IV",
    sku: "SK-003",
    customer: "Mark Smith",
    amount: 2450.0,
    reason: "Price Error",
  },
  {
    orderId: "4508",
    productId: "2203",
    date: "27-06-2026",
    image: "https://placehold.co/64x64/7c3aed/ffffff?text=iPh",
    name: "Sony A7IV",
    sku: "SK-003",
    customer: "Mark Smith",
    amount: 320.0,
    reason: "Price Error",
  },
  {
    orderId: "4509",
    productId: "2204",
    date: "26-06-2026",
    image: "https://placehold.co/64x64/334155/ffffff?text=HP",
    name: "Bose QC45",
    sku: "SK-004",
    customer: "Mark Smith",
    amount: 320.0,
    reason: "Delivery Delay",
  },
];

const ALL_REASONS = [
  "Customer Mind Change",
  "Out of Stock",
  "Delivery Issue",
  "Price Error",
  "Custom",
];

const REASON_STYLES = {
  "Out of Stock": "bg-amber-100 text-amber-700",
  "Mind Change": "bg-blue-100 text-blue-600",
  "Price Error": "bg-red-600 text-white",
  "Delivery Delay": "bg-green-600 text-white",
  "Product Not as Expected": "bg-gray-500 text-white",
};

const STATS = {
  totalCancelled: 72,
  topReason: "Out of Stock",
  topReasonPct: 28,
  value: 12500,
};

// ---- Reason badge --------------------------------------------------------

function ReasonBadge({ reason }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
        REASON_STYLES[reason] || "bg-gray-100 text-gray-600"
      }`}
    >
      {reason}
    </span>
  );
}

// ---- Reason filter dropdown ----------------------------------------------

function ReasonFilterDropdown({ selected, onToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-300 bg-blue-50/50 text-sm text-gray-700"
      >
        <span className="text-xs text-gray-500 shrink-0">Filter by Reason</span>
        <span className="flex items-center gap-1.5 flex-wrap text-xs">
          {ALL_REASONS.map((reason) => (
            <span
              key={reason}
              className="flex items-center gap-1 text-gray-600"
            >
              [{selected.includes(reason) ? "x" : " "}] {reason}
            </span>
          ))}
        </span>
        <ChevronDown className="h-4 w-4 ml-auto shrink-0" />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-1">
          {ALL_REASONS.map((reason) => (
            <label
              key={reason}
              className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(reason)}
                onChange={() => onToggle(reason)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-400"
              />
              {reason}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- Action buttons -------------------------------------------------------

function ActionButtons({ onViewDetails, onContact }) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={onViewDetails}
        className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 whitespace-nowrap"
      >
        <Search className="h-3.5 w-3.5" />
        View Details
      </button>
      <button
        onClick={onContact}
        className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 whitespace-nowrap"
      >
        <Mail className="h-3.5 w-3.5" />
        Customer Contact
      </button>
    </div>
  );
}

// ---- Main component --------------------------------------------------------

export default function CancelledProductsManagement() {
  const [items] = useState(CANCELLED_ITEMS);
  const [reasonFilter, setReasonFilter] = useState([
    "Customer Mind Change",
    "Out of Stock",
    "Delivery Issue",
  ]);

  const toggleReason = (reason) =>
    setReasonFilter((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason],
    );

  return (
    <div className="bg-gray-50 p-6 rounded-2xl">
      {/* Page header */}
      <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
        <h1 className="text-xl font-bold text-gray-900">
          Cancelled Products Management
        </h1>
        <ReasonFilterDropdown selected={reasonFilter} onToggle={toggleReason} />
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-t border-gray-100 text-left text-gray-500">
                <th className="px-5 py-3 font-medium">Original Order ID</th>
                <th className="px-5 py-3 font-medium">Product ID</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Product Image</th>
                <th className="px-5 py-3 font-medium">Product Name</th>
                <th className="px-5 py-3 font-medium">SKU</th>
                <th className="px-5 py-3 font-medium">Customer Name</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Cancel Reason</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr
                  key={`${item.orderId}-${i}`}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-5 py-2.5 text-gray-700 font-medium">
                    #{item.orderId}
                  </td>
                  <td className="px-5 py-2.5 text-gray-600">
                    #{item.productId}
                  </td>
                  <td className="px-5 py-2.5 text-gray-600 whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="px-5 py-2.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-5 py-2.5 text-gray-700 font-medium whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="px-5 py-2.5 text-gray-600">{item.sku}</td>
                  <td className="px-5 py-2.5 text-gray-700 whitespace-nowrap">
                    {item.customer}
                  </td>
                  <td className="px-5 py-2.5 text-gray-700 font-medium">
                    ${item.amount.toFixed(2)}
                  </td>
                  <td className="px-5 py-2.5">
                    <ReasonBadge reason={item.reason} />
                  </td>
                  <td className="px-5 py-2.5">
                    <ActionButtons
                      onViewDetails={() => console.log("view", item.orderId)}
                      onContact={() => console.log("contact", item.orderId)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stats summary row */}
        <div className="flex items-center gap-2 px-5 pt-4 text-sm text-gray-600 flex-wrap">
          <span className="font-medium text-gray-800">
            Cancellation Statistics
          </span>
          <span className="text-gray-300">|</span>
          <span>
            Total Cancelled Items:
            <span className="font-medium text-gray-800">
              {STATS.totalCancelled}
            </span>
          </span>
          <span className="text-gray-300">|</span>
          <span>
            Top Reason:
            <span className="font-medium text-gray-800">
              {STATS.topReason} - {STATS.topReasonPct}%
            </span>
          </span>
          <span className="text-gray-300">|</span>
          <span>
            Value:
            <span className="font-medium text-gray-800">
              ${STATS.value.toLocaleString()}
            </span>
          </span>
        </div>

        {/* Footer note */}
        <p className="px-5 py-4 text-sm text-gray-500 border-t border-gray-100 mt-3">
          Cancellation data is synchronized. Click View Details for
          comprehensive history. List updated at{" "}
          {new Date().toLocaleTimeString()}.
        </p>
      </div>
    </div>
  );
}
