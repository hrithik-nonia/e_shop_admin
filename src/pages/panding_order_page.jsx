import { useState } from "react";
import {
  ChevronDown,
  Download,
  RefreshCw,
  Search,
  Pencil,
  Trash2,
  Eye,
  Mail,
} from "lucide-react";

// ---- Sample data — replace with your API response ----------------------

const ORDERS = [
  {
    id: "1234",
    date: "28-06-2025",
    time: "12:06 AM",
    customer: "Customer Name",
    email: "email@example.com",
    items: 2,
    status: "Pending",
    amount: 899.0,
  },
  {
    id: "1235",
    date: "28-06-2025",
    time: "12:06 AM",
    customer: "Apple Flamme",
    email: "elamne@example.com",
    items: 2,
    status: "Pending",
    amount: 1799.0,
  },
  {
    id: "1236",
    date: "28-06-2025",
    time: "12:05 AM",
    customer: "Apple Flamme",
    email: "email@example.com",
    items: 2,
    status: "Pending",
    amount: 1999.0,
  },
  {
    id: "1237",
    date: "28-06-2025",
    time: "12:35 AM",
    customer: "Apple Flamme",
    email: "email@example.com",
    items: 1,
    status: "Pending",
    amount: 1999.0,
  },
  {
    id: "1238",
    date: "28-06-2025",
    time: "12:35 AM",
    customer: "Jarna Tairi",
    email: "email@example.com",
    items: 1,
    status: "Pending",
    amount: 1799.0,
  },
  {
    id: "1239",
    date: "28-06-2025",
    time: "12:39 PM",
    customer: "Jonna Tirow",
    email: "email@example.com",
    items: 2,
    status: "Awaiting Action",
    amount: 7899.0,
  },
  {
    id: "1230",
    date: "28-06-2025",
    time: "12:15 PM",
    customer: "Apple Flamme",
    email: "email@example.com",
    items: 2,
    status: "Awaiting Action",
    amount: 7899.0,
  },
];

// ---- Status badge ------------------------------------------------------

function StatusBadge({ status }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 whitespace-nowrap">
      {status}
    </span>
  );
}

// ---- Action buttons -----------------------------------------------------

function ActionButtons({ onEdit, onDelete, onReview, onContact }) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={onEdit}
        title="Edit"
        className="p-1.5 rounded-md border border-gray-200 text-blue-500 hover:bg-blue-50"
      >
        <Pencil className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={onDelete}
        title="Delete"
        className="p-1.5 rounded-md border border-gray-200 text-red-500 hover:bg-red-50"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={onReview}
        className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 whitespace-nowrap"
      >
        <Eye className="h-3.5 w-3.5" />
        Review
      </button>
      <button
        onClick={onContact}
        className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 whitespace-nowrap"
      >
        <Mail className="h-3.5 w-3.5" />
        Contact
      </button>
    </div>
  );
}

// ---- Main component ------------------------------------------------------

export default function PendingOrderManagement() {
  const [search, setSearch] = useState("");
  const [orders] = useState(ORDERS);

  const filtered = orders.filter((o) =>
    `${o.id} ${o.customer} ${o.email}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div className="bg-gray-50 p-6 rounded-2xl">
      {/* Page header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gray-900">
          Panding Order Management ({orders.length})
        </h1>
        <button className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
          All Products
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <p className="text-sm text-gray-600">
            Displaying only Panding Orders ({orders.length} total)
          </p>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
              <Download className="h-3.5 w-3.5" />
              Export list
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </button>
          </div>
        </div>

        <div className="px-5 pb-4">
          <div className="relative max-w-xs ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
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
                <th className="px-5 py-3 font-medium">Item Count</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-5 py-3">
                    <a
                      href={`#order-${order.id}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Order #{order.id}
                    </a>
                  </td>
                  <td className="px-5 py-3 text-gray-600 whitespace-nowrap">
                    {order.date}
                    <br />
                    <span className="text-gray-400">{order.time}</span>
                  </td>
                  <td className="px-5 py-3 text-gray-700">
                    {order.customer}
                    <br />
                    <span className="text-gray-400">{order.email}</span>
                  </td>
                  <td className="px-5 py-3 text-gray-700">{order.items}</td>
                  <td className="px-5 py-3">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-5 py-3 text-gray-700 font-medium">
                    ${order.amount.toFixed(2)}
                  </td>
                  <td className="px-5 py-3">
                    <ActionButtons
                      onEdit={() => console.log("edit", order.id)}
                      onDelete={() => console.log("delete", order.id)}
                      onReview={() => console.log("review", order.id)}
                      onContact={() => console.log("contact", order.id)}
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
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <p className="px-5 py-4 text-sm text-gray-500 border-t border-gray-100">
          Review and contact these customers to move orders forward. List
          updated at {new Date().toLocaleTimeString()}.
        </p>
      </div>
    </div>
  );
}
