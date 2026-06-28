import { useState } from "react";
import {
  ChevronDown,
  Download,
  FileText,
  FileSearch,
  Truck,
} from "lucide-react";

// ---- Sample data — replace with your API response ----------------------

const PRODUCTS = [
  {
    id: "7890",
    image: "https://placehold.co/64x64/1e293b/ffffff?text=iPad",
    name: 'iPad Pro 11"',
    sku: "SK-091",
    deliverTo: "John Smith",
    deliveryDate: "25-06-2025",
    quantity: 1,
    price: 899.0,
  },
  {
    id: "7891",
    image: "https://placehold.co/64x64/64748b/ffffff?text=Shoe",
    name: "Nike Air Max",
    sku: "SK-092",
    deliverTo: "Sara Lee",
    deliveryDate: "26-06-2025",
    quantity: 2,
    price: 120.0,
  },
  {
    id: "7892",
    image: "https://placehold.co/64x64/0f766e/ffffff?text=Cam",
    name: "Nike Gradgets",
    sku: "SK-093",
    deliverTo: "Starin Smith",
    deliveryDate: "25-06-2025",
    quantity: 1,
    price: 199.0,
  },
  {
    id: "7893",
    image: "https://placehold.co/64x64/7c3aed/ffffff?text=AS",
    name: "Apple Sneakers",
    sku: "SK-094",
    deliverTo: "John Smith",
    deliveryDate: "25-06-2025",
    quantity: 2,
    price: 120.0,
  },
  {
    id: "7894",
    image: "https://placehold.co/64x64/1e293b/ffffff?text=iPad",
    name: 'iPad Pro 11"',
    sku: "SK-095",
    deliverTo: "John Smith",
    deliveryDate: "25-06-2025",
    quantity: 1,
    price: 899.0,
  },
  {
    id: "7895",
    image: "https://placehold.co/64x64/334155/ffffff?text=MS",
    name: "Molive Sports",
    sku: "SK-096",
    deliverTo: "Mark Smith",
    deliveryDate: "25-06-2025",
    quantity: 1,
    price: 190.0,
  },
  {
    id: "7896",
    image: "https://placehold.co/64x64/4b5563/ffffff?text=NB",
    name: "Nike Bin Apparel",
    sku: "SK-097",
    deliverTo: "Aaren Smith",
    deliveryDate: "25-06-2025",
    quantity: 2,
    price: 789.0,
  },
  {
    id: "7897",
    image: "https://placehold.co/64x64/0e7490/ffffff?text=NR",
    name: "Nike Ridet Loaving",
    sku: "SK-098",
    deliverTo: "John Smith",
    deliveryDate: "25-06-2025",
    quantity: 1,
    price: 120.0,
  },
];

const TOTAL_PRODUCTS = 115;

// ---- Action buttons -------------------------------------------------------

function ActionButtons({ onViewDetails, onTracking }) {
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
        onClick={onTracking}
        className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 whitespace-nowrap"
      >
        <Truck className="h-3.5 w-3.5" />
        Logistics Tracking
      </button>
    </div>
  );
}

// ---- Main component --------------------------------------------------------

export default function DeliveredProductManagement() {
  const [products] = useState(PRODUCTS);

  return (
    <div className="bg-gray-50 p-6 rounded-2xl">
      {/* Page header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gray-900">
          Delivered Product Management ({TOTAL_PRODUCTS})
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
            Displaying Delivered Products ({TOTAL_PRODUCTS} total)
          </p>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
              <Download className="h-3.5 w-3.5" />
              Export list
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
              <FileSearch className="h-3.5 w-3.5" />
              Generate Delivery Report
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-t border-gray-100 text-left text-gray-500">
                <th className="px-5 py-3 font-medium">Product Image</th>
                <th className="px-5 py-3 font-medium">Product ID</th>
                <th className="px-5 py-3 font-medium">Product Name</th>
                <th className="px-5 py-3 font-medium">SKU</th>
                <th className="px-5 py-3 font-medium">Deliver To</th>
                <th className="px-5 py-3 font-medium">Delivery Date</th>
                <th className="px-5 py-3 font-medium">Quantity</th>
                <th className="px-5 py-3 font-medium">Sales Price</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-5 py-2.5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-5 py-2.5 text-gray-700">#{product.id}</td>
                  <td className="px-5 py-2.5 text-gray-700 font-medium">
                    {product.name}
                  </td>
                  <td className="px-5 py-2.5 text-gray-600">{product.sku}</td>
                  <td className="px-5 py-2.5 text-gray-700">
                    {product.deliverTo}
                  </td>
                  <td className="px-5 py-2.5 text-gray-600 whitespace-nowrap">
                    {product.deliveryDate}
                  </td>
                  <td className="px-5 py-2.5 text-gray-700">
                    {product.quantity}
                  </td>
                  <td className="px-5 py-2.5 text-gray-700 font-medium">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-5 py-2.5">
                    <ActionButtons
                      onViewDetails={() =>
                        console.log("view details", product.id)
                      }
                      onTracking={() => console.log("tracking", product.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination info */}
        <p className="px-5 pt-4 text-sm text-gray-500">
          Showing 1 to {products.length} of {TOTAL_PRODUCTS}
        </p>

        {/* Footer note */}
        <p className="px-5 py-4 text-sm text-gray-500 border-t border-gray-100 mt-1">
          Logistics details are finalized. Click tracking to view detailed
          shipment history. List updated at {new Date().toLocaleTimeString()}.
        </p>
      </div>
    </div>
  );
}
